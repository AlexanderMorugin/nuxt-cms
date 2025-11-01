import { eq } from "drizzle-orm";
import { db } from "~/server";
import { UserSchema } from "~/server/database/schema";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  // Проверяем в БД есть ли пользователь с такой почтой
  const userExist = (
    await db
      .select()
      .from(UserSchema)
      .where(eq(UserSchema.email, email))
      .limit(1)
      .execute()
  )[0];

  // Если пользователь с такой почтой существует: Выбрасываем ошибку на стороне сервере
  if (!userExist) {
    return createError({
      statusCode: 401,
      message: "Имя пользователя или пароль неверные.",
    });
  }

  // Сверяем пароль
  const doesThePasswordMatch = comparePassword(password, userExist.password);

  // Если пароли не совпадают: Выбрасываем ошибку на стороне сервере
  if (!doesThePasswordMatch) {
    return createError({
      statusCode: 401,
      message: "Имя пользователя или пароль неверные.",
    });
  }

  // Создаем сессию
  const session = await setUserSession(event, {
    user: {
      ...userExist,
    },
    createdAt: new Date(),
  });
  // const session = await setUserSession(event, {
  //   user: {
  //     ...userExist,
  //   },
  //   createdAt: Date.now(),
  // });

  return session;
});

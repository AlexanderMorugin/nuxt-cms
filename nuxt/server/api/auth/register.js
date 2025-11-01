import { eq } from "drizzle-orm";
import { db } from "~/server";
import { UserSchema } from "~/server/database/schema";
import { hashPassword } from "~/server/utils/hash-password";

export default defineEventHandler(async (event) => {
  const { firstName, lastName, email, password } = await readBody(event);

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
  if (userExist) {
    return createError({
      statusCode: 401,
      message: "Пользователь с такой почтой уже существует.",
    });
  }

  // Хешируем пароль
  const hashUserPassword = hashPassword(password);

  // Собираем все поля инпутов
  const userData = {
    firstName,
    lastName,
    email,
    password: hashUserPassword,
  };

  // Создаем в БД пользователя
  const result = await db.insert(UserSchema).values({ ...userData });

  return result;
});

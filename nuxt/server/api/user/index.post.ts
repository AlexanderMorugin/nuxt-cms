// import { eq } from "drizzle-orm";
import { db } from "~~/server";
import { UserSchema } from "~~/server/database/schema";

interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export default defineEventHandler(async (event) => {
  const body: IUser = await readBody(event);

  const candidate = {
    email: body.email,
    firstName: body.firstName,
    lastName: body.lastName,
    password: body.password,
  };

  // const existUser = (
  //   await db
  //     .select()
  //     .from(UserSchema)
  //     .where(eq(UserSchema.email, body.email))
  //     .limit(1)
  //     .execute()
  // )[0];

  // if (existUser) {
  //   return createError({
  //     statusCode: 401,
  //     message: "Пользователь стакой почтой уже существует.",
  //   });
  // }

  const createdUser = await db.insert(UserSchema).values({ ...candidate });

  return createdUser;
});

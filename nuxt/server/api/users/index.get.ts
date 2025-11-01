import { db } from "~~/server";
import { UserSchema } from "~~/server/database/schema";

interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export default defineEventHandler(async () => {
  const result = await db.select().from(UserSchema);

  return result;
});

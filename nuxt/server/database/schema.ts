import { serial, pgTable, text } from "drizzle-orm/pg-core";

export const UserSchema = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  password: text("password").notNull(),
});

export type userSchemaSelect = typeof UserSchema.$inferSelect;
export type userSchemaInsert = typeof UserSchema.$inferInsert;

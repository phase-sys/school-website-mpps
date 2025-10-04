import {
  integer,
  pgTable,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const contacts = pgTable("contacts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  phone: varchar({ length: 20 }), // optional
  subject: varchar({ length: 255 }).notNull(),
  message: text().notNull(),
  createdAt: timestamp({ mode: "string" }).defaultNow().notNull(),
});

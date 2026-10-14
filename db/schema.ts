import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const paperAccounts = sqliteTable('paper_accounts', { id: text('id').primaryKey(), state: text('state').notNull(), version: integer('version').notNull().default(0), updatedAt: text('updated_at').notNull() });

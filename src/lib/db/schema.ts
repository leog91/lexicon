import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const words = sqliteTable('words', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	word: text('word').notNull(),
	definition: text('definition').notNull(),
	translation: text('translation'),
	createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date())
});

export type Word = typeof words.$inferSelect;
export type NewWord = typeof words.$inferInsert;

import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  integer,
  json,
  boolean,
  index
} from 'drizzle-orm/pg-core';

export const newThemes = pgTable(
  'new_themes',
  {
    id: serial('id').primaryKey().notNull(),
    name: text('name').notNull(),
    userId: text('user_id').notNull(),
    userName: text('user_name').notNull(),
    isDark: boolean('is_dark').notNull(),
    scheme: text('scheme').notNull(),
    baseHue: integer('base_hue').notNull(),
    isPublic: boolean('is_public').default(false).notNull(),
    uiColors: json('ui_colors').notNull(),
    syntaxColors: json('syntax_colors').notNull(),
    ansiColors: json('ansi_colors').notNull(),
    shares: integer('shares').default(0).notNull(),
    downloads: integer('downloads').default(0).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull()
  },
  (table) => {
    return {
      idIndex: index('id_index').using('btree', table.id.asc().nullsLast()),
      nameUserIdIndex: uniqueIndex('name_user_id_index').using(
        'btree',
        table.name.asc().nullsLast(),
        table.userId.asc().nullsLast()
      )
    };
  }
);

export type ThemeSelect = InferSelectModel<typeof newThemes>;
export type ThemeInsert = InferInsertModel<typeof newThemes>;

export const themeLikes = pgTable(
  'theme_likes',
  {
    id: serial('id').primaryKey().notNull(),
    themeId: integer('theme_id')
      .references(() => newThemes.id)
      .notNull(),
    userId: text('user_id').notNull()
  },
  (table) => {
    return {
      themeIdUserIdIdx: uniqueIndex('theme_id_user_id_idx').using(
        'btree',
        table.themeId.asc().nullsLast(),
        table.userId.asc().nullsLast()
      )
    };
  }
);

export type ThemeLikeSelect = InferSelectModel<typeof themeLikes>;
export type ThemeLikeInsert = InferInsertModel<typeof themeLikes>;

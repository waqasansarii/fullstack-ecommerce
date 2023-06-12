import {pgTable,varchar,integer,serial} from 'drizzle-orm/pg-core'
import {drizzle} from 'drizzle-orm/vercel-postgres'
import { sql } from '@vercel/postgres'

export const cartTable = pgTable('items_cart',{
    id : serial('id').primaryKey(),
    user_id: varchar('user_id',{
        length:255
    }).notNull(),
    product_id : varchar('product_id',{
        length:255
    }).notNull(),
    quantity : integer('quantity').notNull(),
    product_image : varchar('product_image',{
        length:255
    }).notNull(),
    product_name : varchar('product_name',{
        length:255
    }).notNull(),
    product_category : varchar('product_category',{
        length:255
    }).notNull(),
    price : integer('price').notNull(),
})


export const db = drizzle(sql)
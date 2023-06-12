import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { category } from './category'
import { suitCategory } from './suitCategory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,suitCategory],
}

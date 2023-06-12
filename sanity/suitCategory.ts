import { defineField, defineType } from "sanity";

export const suitCategory = defineType({
    name:'suitcategory',
    title:'Suit Cateory',
    type:'document',
    fields:[
        defineField({
          name:'suitcategory',
          type:'string'
    })
]
})
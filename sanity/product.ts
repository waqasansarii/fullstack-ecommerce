import { defineField, defineType } from "sanity";

export const product =defineType({
    name:'product',
    title:'Product',
    type:'document',
    fields:[
        defineField({
            name:'title',
            title:'Product Name',
            type:'string'
        }),
        defineField({
            name:'description',
            title:'Product description',
            type:'string'
        }),
        defineField({
            name:'price',
            title:'Price',
            type:'number'
        }),
        defineField({
            name:'image',
            title:'Product Image',
            type:'array',
            of:[{
                type:'image'
            }]
        }),
        defineField({
            name:'productCategory',
            title:'Product Category',
            type:'reference',
            to:[{
                type:'category'
            }]
        }),
        defineField({
            name:'subCategory',
            title:'Sub Category',
            type:'reference',
            to:[{
                type:'suitcategory'
            }]
        }),

    ]
})
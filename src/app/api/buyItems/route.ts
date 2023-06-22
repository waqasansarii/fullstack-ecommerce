import { cartTable, db } from '@/lib/drizzle'
import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuid } from 'uuid'
import { cookies } from 'next//headers'
import { eq, and ,inArray} from 'drizzle-orm'

type ID  = string | null

export const DELETE = async (request: NextRequest) => {
    let req = request.nextUrl.searchParams
    //  console.log(req)
    // checking params in url
    if (req.has('id') ) {
      let user:ID = req.get('id')
      if(user?.length){

      
      // for(i=0; i<= user?.length)
      console.log(user)
      // let product = req.get('product_id')
      try {
        // deleting product

        // let response = await db
        //   .delete(cartTable)
        //   .where(
        //     inArray(cartTable.id, [63,64])
        //     // and(
        //     //   eq(cartTable.product_id, `${product}`),
        //     //   eq(cartTable.user_id, `${user}`),
        //     // ),
        //   )
        //   .returning()
        // // get all remaining product after deleted
        // let currentUserProducts = await db
        //   .select()
        //   .from(cartTable)
        //   .where(eq(cartTable.user_id, `${user}`))
  
        return NextResponse.json({
          // deletedItem: response,
          // remainingItem: currentUserProducts,
          id : user,
          status: 200,
          message: 'Product has been deleted!',
        })
      } catch (err) {
        return NextResponse.json({
          message: 'Getting error while deleting product!',
        })
      }
    }
    } else {
      return NextResponse.json({
        message: `id missing`,
        status: 404,
      })
    }
  }


  // CREATE TABLE BUY_ITEMS(
  //   id SERIAL PRIMARY KEY,
  //   price int NOT NULL,
  //   quantity int NOT NULL,
  //   user_id varchar(255) NOT NULL,
  //   product_name varchar(255) NOT NULL,
  //   product_image varchar(255) NOT NULL
    
  // )
  
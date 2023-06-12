import { cartTable, db } from '@/lib/drizzle'
import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuid } from 'uuid'
import { cookies } from 'next//headers'
import { eq } from 'drizzle-orm'

export const GET = async (request: NextRequest) => {
  // let req = await request.json()
  // console.log(req)
  try {
    let res = await db.select().from(cartTable)
    // .where(eq(cartTable.user_id,req.user_id));
    return NextResponse.json({ res })
  } catch (err) {
    return NextResponse.json({ message: `error ${err}` })
  }
}

export const POST = async (request: NextRequest) => {
  let res = await request.json()
  // const uid = uuid()
  // const setCookie = cookies()

  // //    set specific user id
  // if (!setCookie.get('user_id')?.value) {
  //   setCookie.set('user_id', uid)
  // }

  try {
    let pushData = await db
      .insert(cartTable)
      .values({
        product_id: res.product_id,
        quantity: res.quantity,
        user_id: res.user_id,
        product_category: res.product_category,
        product_image: res.product_image,
        product_name: res.product_name,
        price: res.price
      })
      .returning()
    let currentUserProducts = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, res.user_id))

    return NextResponse.json({
      productResult: pushData,
      allProducts: currentUserProducts,
    })
  } catch (err) {}
}

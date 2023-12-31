import { cartTable, db } from '@/lib/drizzle'
import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuid } from 'uuid'
import { cookies } from 'next//headers'
import { eq, and } from 'drizzle-orm'
// import { auth } from '@clerk/nextjs'

export const GET = async (request: NextRequest) => {
  // const {userId, getToken} = auth();
  // console.log(userId)
  let req = request.nextUrl.searchParams

  // if (req.has('user_id')) {
  let user = req.get('user_id')
  try {
    // getting current user cart items
    let res = await db.select().from(cartTable)
    // .where(eq(cartTable.user_id, `${user}`))
    // .where(eq(cartTable.user_id,req.user_id));
    return NextResponse.json({ res, status: 200, message: 'OK' })
  } catch (err) {
    return NextResponse.json({ message: `error ${err}`, status: 500 })
  }
  // } else {
  //   return NextResponse.json({ message: `user id missing`, status: 404 })
  // }
}

export const POST = async (request: NextRequest) => {
  let res = await request.json()

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
        price: res.price,
      })
      .returning()

    let currentUserProducts = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, res.user_id))

    return NextResponse.json({
      productResult: pushData,
      allProducts: currentUserProducts,
      message: 'OK',
      status: 200,
    })
  } catch (err) {
    return NextResponse.json({ message: 'request failed', status: 500 })
  }
}

export const DELETE = async (request: NextRequest) => {
  let req = request.nextUrl.searchParams

  // checking params in url
  if (req.has('user_id') && req.has('product_id')) {
    let user = req.get('user_id')
    let product = req.get('product_id')
    try {
      // deleting product
      let response = await db
        .delete(cartTable)
        .where(
          and(
            eq(cartTable.product_id, `${product}`),
            eq(cartTable.user_id, `${user}`),
          ),
        )
        .returning()
      // get all remaining product after deleted
      let currentUserProducts = await db
        .select()
        .from(cartTable)
        .where(eq(cartTable.user_id, `${user}`))

      return NextResponse.json({
        deletedItem: response,
        remainingItem: currentUserProducts,
        status: 200,
        message: 'Product has been deleted!',
      })
    } catch (err) {
      return NextResponse.json({
        message: 'Getting error while deleting product!',
      })
    }
  } else {
    return NextResponse.json({
      message: `user and product id missing`,
      status: 404,
    })
  }
}

export const PUT = async (request: NextRequest) => {
  let req = await request.json()

  try {
    let res = await db
      .update(cartTable)
      .set({
        quantity: req.quantity,
      })
      .where(
        and(
          eq(cartTable.product_id, req.product_id),
          eq(cartTable.user_id, req.user_id),
        ),
      )
      .returning()
    let currentUserProducts = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, req.user_id))
    return NextResponse.json({
      result: res,
      status: 200,
      message: 'Product has been updated',
      allProducts: currentUserProducts,
    })
  } catch (err) {
    return NextResponse.json({ message: 'request failed', status: 500 })
  }
}

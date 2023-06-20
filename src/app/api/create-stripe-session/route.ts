import { CartItem } from '@/lib/type'
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(
  'sk_test_51NIrwuHT2M3Dc428kJazZR7XcGMMhXpwz3OirXg1cW8xTKNWf03iDSOHCTreGvdUylUPvyitiZtrKLVjHxXP7R9n00xYUgXwuE',
  {
    // typescript:true
    apiVersion: '2022-11-15',
  },
)

export async function POST(req: NextRequest) {
  const { item } = await req.json()
  const lineItems = item.map((it: CartItem) => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: it.product_name,
          // category: it.product_category,
          description: 'description',
          images: [it.product_image],
          metadata: { productId: it.product_id },
        },
        unit_amount: it.price * 100,
      },
      quantity: it.quantity,
    }
  })
  // console.log(lineItems)
  // const transformedItem = {}
  const transformedItem = {
    price_data: {
     currency: 'usd',
     product_data:{
       name: 'abc',
       description: 'description',
       images:['url'],
       metadata:{name:"some additional info",
                task:"Usm created a task"},

     },
     unit_amount: 300 * 100,

   },
   quantity: 3,
   
 };
//  console.log('local data',transformedItem)
  const redirectURL =
    // process.env.NODE_ENV === 'development'
       'http://localhost:3000'
      //  'https://fullstack-ecommerce-one.vercel.app/'
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: redirectURL + '/payment/success',
      cancel_url: redirectURL + '/payment/fail',
    })

       console.log("response-------------------",await session);
    // return NextResponse.json({ sessionId: session?.id, url: session.url,response : session })
    return NextResponse.json(session?.id)
  } catch (err) {
    return NextResponse.json({
      message: 'getting error white payment',
      status: 500,
    })
  }
}

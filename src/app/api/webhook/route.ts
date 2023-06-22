import { NextRequest, NextResponse } from 'next/server'
import { cartTable, db } from '@/lib/drizzle'
import { eq, and ,inArray} from 'drizzle-orm'
import Stripe from 'stripe'
import { stripeRes } from '@/lib/type'
// import {} from 'stripe/types/WebhookEndpoints'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
})
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string

export async function POST(req: NextRequest, res: any) {
  try {
    // const body = await getRawBody()
    const rawBody = await req.text()
    const sig = req.headers.get('stripe-signature') as string
    console.log('sig-----------=============-------====-=-=-', sig)

    const event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret)

    console.log(event)

    if (event.type==='checkout.session.completed') {
      const session:any = event.data.object

      console.log('payment success-----------------------', session)
      let convertObject = Object.values(session?.metadata).map((val) =>
        Number(val),
      )
      console.log('converting', convertObject)

      // const line_Items = await stripe.checkout.sessions.listLineItems(
      //   event.data.object.id,
      // )
      // console.log('Line Items==========================', line_Items)

      //Once you'll get data you can use it according to your
      //reqirement for making update in DB
      try{
          let getCheckoutItems =await db.select().from(cartTable).where(inArray(cartTable.id,convertObject))
          let deleteItemFromCart = await db.delete(cartTable).where(inArray(cartTable.id,convertObject))
          console.log('delete items', deleteItemFromCart)

      }catch(err){
        return NextResponse.json({ message: 'request failed', status: 500 })

      }

    } else {
      res.setHeader('Allow', 'POST')
      // res.status(405).end("Method Not Allowed");
    }
  } catch (err) {
    console.log('Error in webhook----------', err)
    // res.status(400).send(`Webhook Error: ${err.message}`);
    return
  }
}

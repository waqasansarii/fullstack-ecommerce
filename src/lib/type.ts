import { Image } from "sanity";

export type Products = {
  subCategory: { suitcategory: string; _id: string };
  price: number;
  //   _type: string;
  _id: string;
  title: string;
  //   _updatedAt: string;
  image: Image[];
  //   _rev: string;
  description: string;
  productCategory: { category: string; _id: string };
  //   _createdAt: string;
};

export type CartItem = {
  id: number;
  price: number;
  product_category: string;
  product_id: string;
  product_image: string;
  product_name: string;
  quantity: number;
  user_id: string;
};


export type stripeRes={
  id: string,
  object: string,
  after_expiration: null,
  allow_promotion_codes: null,
  amount_subtotal: number,
  amount_total: number,
  automatic_tax: { enabled: boolean, status: null },
  billing_address_collection: null,
  cancel_url: string,
  client_reference_id: null,
  consent: null,
  consent_collection: null,
  created: number,
  currency: string,
  currency_conversion: null,
  custom_fields: [],
  custom_text: { shipping_address: null, submit: null },
  customer: null,
  customer_creation: string,
  customer_details: {
    address: {
      city: null,
      country: string,
      line1: null,
      line2: null,
      postal_code: string,
      state: null
    },
    email: string,
    name: string,
    phone: null,
    tax_exempt: string,
    tax_ids: []
  },
  customer_email: null,
  expires_at: number,
  invoice: null,
  invoice_creation: {
    enabled: boolean,
    invoice_data: {
      account_tax_ids: null,
      custom_fields: null,
      description: null,
      footer: null,
      metadata: object,
      rendering_options: null
    }
  },
  livemode: boolean,
  locale: string,
  metadata: Object,
  mode: string,
  payment_intent: string,
  payment_link: null,
  payment_method_collection: string,
  payment_method_options: object,
  payment_method_types: string[],
  payment_status: string,
  phone_number_collection: { enabled: boolean },
  recovered_from: null,
  setup_intent: null,
  shipping_address_collection: null,
  shipping_cost: null,
  shipping_details: null,
  shipping_options: [],
  status: string,
  submit_type: null,
  subscription: null,
  success_url: string,
  total_details: { amount_discount: number, amount_shipping: number, amount_tax: number },
  url: null
}
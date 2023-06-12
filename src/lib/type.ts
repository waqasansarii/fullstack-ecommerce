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

import React from "react";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import { client } from "../../../sanity/lib/client";
import { Products } from "@/lib/type";

const getProductData = async (category: string) => {
  let data = await client.fetch(`*[_type=="product" ${
    category.includes("all-products")
      ? ""
      : `&& productCategory -> category =="${category}"`
  } ] {
  image,
  price ,
  _id,
  title,
  description,
  productCategory -> {
    _id,
    category
  },
  subCategory->{
    suitcategory,
    _id
  }
 }`);
  return data;
};

const Product = async ({
  params: { category },
}: {
  params: { category: string };
}) => {

  const data = await getProductData(category);

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-x-4 gap-y-10 justify-center mb-[10rem]">
        {data?.map((val: Products) => (
          <Card data={val} key={val._id} />
        ))}
      </div>
      <Footer />
    </Layout>
  );
};

export default Product;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import { Products } from "@/lib/type";

const Card = ({data}:{data:Products}) => {
  // console.log(data)
  return (
    <Link href={`/product/${data?._id}`}  className=" hover:scale-105 m-auto transition ease-in-out delay-150 duration-500">
      <div className=" w-full">
        <Image
          src={urlForImage(data.image[0]).url()}
          className="w-full "
          width={300}
          height={200}
          alt="product"
        />
      </div>
      <div className="p-2">
        <h2 className="mt-3">{data.title}</h2>
        <p className="font-bold mt-2">${data.price}</p>
      </div>
    </Link>
  );
};

export default Card;

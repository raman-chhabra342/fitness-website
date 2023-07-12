import React, { useState } from "react";
import Product from "./Product";
import { ProductItem } from "./ProductItem";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ItemModel from "./ItemModel";

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className=" block order-last lg:order-first ">
      {/* h-screen */}

      {/* <ProductItem /> */}
      <div className="grid grid-cols-2 gap-x-2 justify-evenly sm:grid-cols-2 xl:grid-cols-4 ">
        {/* <div className="grid grid-cols-2 gap-x-2 justify-center sm:grid-cols-2 xl:grid-cols-4 "> */}
        {/* {console.log("Produts ::>> ")}
        {console.log(products)} */}
        {products.map((product) => (
          <>
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          </>
        ))}
      </div>
    </main>
  );
}

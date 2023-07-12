import Link from "next/link";

import { ProductItem } from "../../../components/ayurgenic/ProductItem";
import Basket from "../../../components/ayurgenic/Basket";
import Header from "../../../components/ayurgenic/Header";
import Main from "../../../components/ayurgenic/Main";
import fake_ayurgenic from "../../../public/fake_ayurgenic.json";
const FA = fake_ayurgenic;
// import "../../../styles/ayurgenic.css";
import data from "../../../public/data";
import { useState, useEffect } from "react";
import Product from "../../../components/ayurgenic/Product";
import FilterButtons from "../../../components/ayurgenic/FilterButtons";
import Head from "next/head";

const Index = ({ newData }) => {
  const { products } = newData;
  const [cartItems, setCartItems] = useState([]);
  const [productItems, setproductItems] = useState(products);

  // useEffect(() => {
  //   // Perform localStorage action
  //   const cartStateFromInternalStorage = JSON.parse(
  //     localStorage.getItem("cart")
  //   );

  //   console.log("cartStateFromInternalStorage :");
  //   console.log(cartStateFromInternalStorage);
  //   setCartItems(cartStateFromInternalStorage);
  // }, []);

  const items = [...new Set(productItems.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = productItems.filter((newVal) => {
      return newVal.category === curcat;
    });
    setproductItems(newItem);
  };

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    // localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
    // localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  return (
    <div>
      <Head>
        <title>All Products | Vyayamshala Fitness </title>
        <meta
          name="description"
          content="Our motive is transforming peoples lives by motivating them to change their mindset for fitness and health. We believe there is always a need for support and motivation, no matter the individual's situation in the fitness journey."
        />
        <meta
          property="og:description"
          content="Our motive is transforming peoples lives by motivating them to change their mindset for fitness and health. We believe there is always a need for support and motivation, no matter the individual's situation in the fitness journey."
        />
        <meta property="og:url" content="vyayamshalafitness.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vyayamshala Fitness" />
        <meta
          name="twitter:card"
          content="Vyayamshala Fitness | twitter preview"
        />

        <meta property="og:image" content={"logo.png"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1 className="text-center mt-3">All Products</h1> */}

      {/* <div className="grid container justify-center mx-auto mb-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {FA.map((item) => (
          // <div className="cardblock m-5 p-2 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <ProductItem
            name={item.name}
            price={item.price}
            description={item.description}
          />
          // </div>
        ))}
      </div> */}

      {/* <main className="block col-2">
        <h2>Products</h2>
        <div className="row">
          {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
        </div>
      </main> */}

      {/* <Header countCartItems={cartItems.length} /> */}
      <div className="container mx-auto grid grid-flow-row lg:grid-flow-col order-last sm:order-first">
        <div>
          <article>
            <h2 className="text-4xl text-center font-bold py-5">
              Ayurgenic Products
            </h2>
          </article>
          <FilterButtons
            filterItem={filterItem}
            setproductItems={setproductItems}
            items={items}
            products={products}
          />
          <Main products={productItems} onAdd={onAdd}></Main>
        </div>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://script.googleusercontent.com/macros/echo?user_content_key=KJV34qNrxQx0QB-_ekcHF8W4GL817z6oFOmDahNmO4SaevIX-UG61DzE84W82MZK_420P1DgBuvnsqWjqYzzKs2LBlQxMLmUm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFUvuZA-uNfwQtj5ca1bNXzecu3_pNFdfTNW52wmhybV385tG223hclzcBTwzssQWkvGf8v1jiqIP_ONroLhztgRPLZHYuNsvQ&lib=MtvYdp9ItoHM9aJi2zQz6xP-v0S0TKgyJ`
  );
  const data1 = await res.json();

  const newData = { products: data1 };
  // Pass data to the page via props
  return { props: { newData } };
}

export default Index;

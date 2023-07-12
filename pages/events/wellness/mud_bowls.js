import React from "react";
import ImageGallery from "react-image-gallery";
import MyParallaxBanner from "../../../components/design/MyParallaxBanner";
// import Img2 from "./imgs/img2.jpg";
import Head from "next/head";

const images = [
  {
    original: "../../../mb/img1.jpg",
    thumbnail: "../../../mb/img1.jpg",
  },
  {
    original: "../../../mb/img2.jpg",
    thumbnail: "../../../mb/img2.jpg",
  },
  {
    original: "../../../mb/img3.jpg",
    thumbnail: "../../../mb/img3.jpg",
  },
  // {
  //   original: "../../../mb/img4.jpg",
  //   thumbnail: "../../../mb/img4.jpg",
  // },
  {
    original: "../../../mb/img5.jpg",
    thumbnail: "../../../mb/img5.jpg",
  },
  {
    original: "../../../mb/img6.jpg",
    thumbnail: "../../../mb/img6.jpg",
  },
  // {
  //   original: "../../../mb/img7.jpg",
  //   thumbnail: "../../../mb/img7.jpg",
  // },
  {
    original: "../../../mb/img8.jpg",
    thumbnail: "../../../mb/img8.jpg",
  },
  {
    original: "../../../mb/img9.jpg",
    thumbnail: "../../../mb/img9.jpg",
  },
  {
    original: "../../../mb/img10.jpg",
    thumbnail: "../../../mb/img10.jpg",
  },
  {
    original: "../../../mb/img11.jpg",
    thumbnail: "../../../mb/img11.jpg",
  },
];

const mud_bowls = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Mud Bowl | Vyayamshala Fitness </title>
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
      <MyParallaxBanner
        imageUrl="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit"
        text={"Mud Bowls"}
      />

      <p className="text-4xl text-center my-10">
        Mud Bowls donation organsied by Vyayamshala
      </p>
      <div className="container p-10 m-5 mx-auto  ">
        <ImageGallery items={images} autoPlay="true" />
      </div>
    </div>
  );
};

export default mud_bowls;

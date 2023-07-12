import React from "react";
import ImageGallery from "react-image-gallery";
import MyParallaxBanner from "../../../components/design/MyParallaxBanner";
// import Img2 from "./imgs/img2.jpg";
import Head from "next/head";

const images = [
  {
    original: "../../../od/img1.jpg",
    thumbnail: "../../../od/img1.jpg",
  },
  {
    original: "../../../od/img2.jpg",
    thumbnail: "../../../od/img2.jpg",
  },
  {
    original: "../../../od/img3.jpg",
    thumbnail: "../../../od/img3.jpg",
  },
  {
    original: "../../../od/img4.jpg",
    thumbnail: "../../../od/img4.jpg",
  },
  {
    original: "../../../od/img5.jpg",
    thumbnail: "../../../od/img5.jpg",
  },
  {
    original: "../../../od/img6.jpg",
    thumbnail: "../../../od/img6.jpg",
  },
  {
    original: "../../../od/img7.jpg",
    thumbnail: "../../../od/img7.jpg",
  },
  {
    original: "../../../od/img8.jpg",
    thumbnail: "../../../od/img8.jpg",
  },
  {
    original: "../../../od/img9.jpg",
    thumbnail: "../../../od/img9.jpg",
  },
  {
    original: "../../../od/img10.jpg",
    thumbnail: "../../../od/img10.jpg",
  },

  // {
  //   original: "https://picsum.photos/id/1015/1000/600/",
  //   thumbnail: "https://picsum.photos/id/1015/250/150/",
  // },
  // {
  //   original: "https://picsum.photos/id/1019/1000/600/",
  //   thumbnail: "https://picsum.photos/id/1019/250/150/",
  // },
];

const organ_donation = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Organ Donation | Vyayamshala Fitness </title>
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
        text={"Organ Donation Campgin"}
      />

      <p className="text-4xl text-center my-10">
        Organ Donation organsied by Vyayamshala
      </p>
      <div className="container p-10 m-5 mx-auto  ">
        <ImageGallery items={images} autoPlay="true" />
      </div>
    </div>
  );
};

export default organ_donation;

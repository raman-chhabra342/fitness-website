import React from "react";
import ImageGallery from "react-image-gallery";
import MyParallaxBanner from "../../../components/design/MyParallaxBanner";
// import Img2 from "./imgs/img2.jpg";
import Head from "next/head";

const images = [
  {
    original: "../../../bd/img1.jpg",
    thumbnail: "../../../bd/img1.jpg",
  },
  {
    original: "../../../bd/img2.jpg",
    thumbnail: "../../../bd/img2.jpg",
  },
  {
    original: "../../../bd/img3.jpg",
    thumbnail: "../../../bd/img3.jpg",
  },
  {
    original: "../../../bd/img4.jpg",
    thumbnail: "../../../bd/img4.jpg",
  },
  {
    original: "../../../bd/img5.jpg",
    thumbnail: "../../../bd/img5.jpg",
  },
  {
    original: "../../../bd/img6.jpg",
    thumbnail: "../../../bd/img6.jpg",
  },
  {
    original: "../../../bd/img7.jpg",
    thumbnail: "../../../bd/img7.jpg",
  },
];

const images2022 = [];

for (var i = 1; i < 39; i++) {
  images2022.push({
    // img (1).jpg
    original: "../../../bd/2022/img (" + i + ").jpg",
    thumbnail: "../../../bd/2022/img (" + i + ").jpg",
  });
}

const images2021 = [];

for (var i = 1; i < 30; i++) {
  images2021.push({
    // img (1).jpg
    original: "../../../bd/2021/img (" + i + ").jpg",
    thumbnail: "../../../bd/2021/img (" + i + ").jpg",
  });
}
const blood_donation = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Blood Donation | Vyayamshala Fitness </title>
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
        text={"Blood Donation Camp"}
      />

      <p className="text-4xl text-center my-10">
        Blood Donation 2022 organsied by Vyayamshala
      </p>
      <div className="container p-10 m-5 mx-auto  ">
        <ImageGallery items={images2022} autoPlay="true" />
      </div>
      <br />
      <p className="text-4xl text-center my-10">
        Blood Donation 2021 organsied by Vyayamshala
      </p>
      <div className="container p-10 m-5 mx-auto  ">
        <ImageGallery items={images2021} autoPlay="true" />
      </div>
    </div>
  );
};

export default blood_donation;

import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Parallax as Par } from "react-scroll-parallax";

import Router from "next/router";
import { FiChevronDown } from "react-icons/fi";
import MyCTA from "../components/design/MyCTA";
import styles from "../styles/Home.module.css";
// Landing Page
import { Parallax as ParallaxScroll } from "react-scroll-parallax";

export default function Home() {
  // const { ref } = useParallax({ speed: 30 });
  const featuresCardData = [
    {
      id: 1,
      title: "Ayurgenic",
      desc: "Lorem ipsum dorlor sit",
      redircetTo: "/ayurgenic",
      imgUrl: "/Ayurgenic.png",
    },
    {
      id: 2,
      title: "Events",
      desc: "Lorem ipsum dorlor sit",
      redircetTo: "/courses",
      imgUrl: "/events/blood_thumbnail.jpg",
    },
    {
      id: 3,
      title: "Courses",
      desc: "Lorem ipsum dorlor sit",
      redircetTo: "/courses",
      imgUrl: "/courses/master.png",
    },
    {
      id: 5,
      title: "Workshops",
      desc: "Lorem ipsum dorlor sit",
      redircetTo: "/events",
      imgUrl: "/events/corporate.png",
    },
  ];
  return (
    <div>
      <Head>
        <title>Vyayamshala Fitness </title>
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
      {/* Hero Section */}

      <div className="  h-screen">
        <div className=" h-96 w-[250px]">
          <Parallax pages={9.6}>
            {/* hero */}
            <ParallaxLayer offset={0}>
              <div className="wrapper h-screen">
                <div className="wrapper">
                  <video
                    id="background-video"
                    autoPlay
                    loop
                    muted
                    //   poster="https://assets.codepen.io/6093409/river.jpg"
                  >
                    <source src="/video/main3.mp4" type="video/mp4" />
                  </video>
                </div>

                {/* <div className="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
          <svg
            className="xl:h-40 xl:w-full"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              fill="currentColor"
            ></path>
          </svg>
          <div className="bg-white w-full h-20 -mt-px"></div>
        </div> */}
              </div>
            </ParallaxLayer>

            {/* Level up */}
            <ParallaxLayer
              offset={0}
              // speed={5}
              // sticky={{ start: 1, end: 3.5 }}
              // style={{ backgroundColor: "#FB9241" }}
            >
              {" "}
              <>
                <div className=" bg-cream mt-20  max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
                  <div className=" mt-40  lg:mt-5 my-auto lg:mt-24 xl:mt-28 flex flex-col w-full lg:w-[50%] justify-center  items-center lg:items-start text-center lg:text-left mb-5 md:mb-0 lg:pl-25">
                    <img
                      className="w-28 md:w-32 lg:w-36 xl:w-48"
                      src="/logo.png"
                    ></img>

                    <h1
                      data-aos="fade-right"
                      data-aos-once="true"
                      className="my-4 text-5xl lg:-ml-3 lg:text-7xl font-bold leading-tight text-darken text-white text-center cooperBlack"
                    >
                      Vyayam
                      <span className="text-orange-400 font-bold">
                        shala{" "}
                        {/* <span className="h-1 w-1 float-right text-lg">®</span> */}
                      </span>
                    </h1>
                    <p
                      data-aos="fade-down"
                      data-aos-once="true"
                      data-aos-delay="300"
                      className="leading-normal font-sans text-2xl mb-8 font-extralight  "
                    >
                      Fitness and Wellness
                    </p>

                    <button className=" bg-orange-400  my-auto h-[50px] text-white text-xl font-bold rounded-2xl px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                      <Link href="/contact">Join now</Link>
                    </button>

                    <div
                      data-aos="fade-up"
                      data-aos-once="true"
                      data-aos-delay="700"
                      className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
                    >
                      {/* <button className="lg:mx-0 bg-orange-400  my-auto h-[50px] text-white text-xl font-bold rounded-2xl px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                <Link href="/contact">Join now</Link>
              </button> */}
                    </div>
                  </div>

                  {/* <div className="w-full lg:w-[50%] relative" id="girl">
                    <img
                      data-aos="fade-up"
                      data-aos-once="true"
                      className="w-10/12 mx-auto 2xl:-mb-20"
                      src="fitness_PNG196.png"
                    />
                  </div> */}
                </div>
                <Link href="#sec1">
                  <a className="-mt-[2%] mx-auto content-center justify-center flex">
                    <FiChevronDown size={"40px"} />
                  </a>
                </Link>
              </>
            </ParallaxLayer>
            <ParallaxLayer speed={0.9} sticky={{ start: 0.9, end: 3.5 }}>
              <div className="wrapper-top">
                <div className="flex h-screen grad-background"></div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              id="sec1"
              speed={1.5}
              sticky={{ start: 1.3, end: 3.5 }}
            >
              <h1 className="ml-10 absolute top-36 mx-auto font-extrabold ">
                Level Up{" "}
              </h1>
            </ParallaxLayer>

            <ParallaxLayer
              offset={2}
              speed={1.6}
              sticky={{ start: 1.9, end: 3.5 }}
            >
              <div className="flex h-screen">
                <h1 className="ml-10 absolute top-64 mx-auto font-extrabold">
                  for a better tomorrow,
                </h1>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={4.5}
              speed={1.8}
              sticky={{ start: 2.9, end: 3.5 }}
            >
              <div className="flex h-screen">
                <h1 className="ml-10 absolute top-96   mx-auto font-extrabold">
                  making fitness a lifestyle
                </h1>
              </div>
            </ParallaxLayer>
            {/* Level up over */}

            {/*  Backdrop*/}
            <ParallaxLayer
              offset={4.2}
              speed={-3}
              // style={{ backgroundColor: "#FF7700", opacity: "1" }}
              style={{ backgroundColor: "#FF7700" }}
            >
              <>
                <div className="custom-shape-divider-top-1655984586">
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M1200 0L0 0 598.97 114.72 1200 0z"
                      className="shape-fill"
                    ></path>
                  </svg>
                </div>
                <div className="custom-shape-divider-bottom-1655985115">
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                      className="shape-fill"
                    ></path>
                  </svg>
                </div>
              </>
            </ParallaxLayer>

            {/* <ParallaxLayer
            offset={4.5}
            speed={2}
            style={{ backgroundColor: "#251D3A", opacity: "1" }}
          /> */}
            {/* Backdrop end */}

            {/* Services we offer */}

            {/* Illustration images */}

            <ParallaxLayer
              offset={4.8}
              // sticky={{ start: 4.8, end: 5.2 }}
              // speed={1.5}
            >
              <div className="z-50">
                <div className="hidden sm:block">
                  <div className="absolute top-[60%] left-[2%] float-animate ">
                    <img
                      src="illustrations/Dumbell_01.png"
                      className="h-40 w-40"
                    />
                  </div>
                  <div className="absolute top-0 left-1/2 float-animate ">
                    <img
                      src="illustrations/Dumbell_03.png"
                      className="h-40 w-40"
                    />
                  </div>
                  <div className="absolute bottom-0 left-96 float-animate ">
                    <img
                      src="illustrations/Kettlebell_01.png"
                      className="h-40 w-40"
                    />
                  </div>
                  <div className="absolute top-[1%] left-[30%] float-animate ">
                    <img
                      src="illustrations/Duffle bag_03.png"
                      className="h-40 w-40"
                    />
                  </div>
                  <div className="absolute top-[7%] left-[4%] float-animate ">
                    <img
                      src="illustrations/Gym Bottle_01.png"
                      className="h-40 w-40"
                    />
                  </div>
                  <div className="absolute -top-1 right-[200px] float-animate ">
                    <img
                      src="illustrations/Handgrip_03.png"
                      className="h-40 w-40"
                    />
                  </div>
                  <div className="absolute bottom-9 right-[300px] float-animate ">
                    <img
                      src="illustrations/Kettlebell_02.png"
                      className="h-40 w-40"
                    />
                  </div>{" "}
                  <div className="absolute bottom-2 left-[350px] float-animate ">
                    <img
                      src="illustrations/Weight Plate_02.png"
                      className="h-40 w-40"
                    />
                  </div>
                  <div className="absolute top-1/2 right-[50px] float-animate ">
                    <img
                      src="illustrations/Skipping rope_01.png"
                      className="h-40 w-40"
                    />
                  </div>
                  <div className="absolute top-1/2 left-[150px] float-animate ">
                    <img
                      src="illustrations/Weight machine_03.png"
                      className="h-40 w-40"
                    />
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className=" uppercase text-white  font-extrabold text-center   text-3xl  sm:text-4xl  lg:text-5xl">
                    Services we offer
                  </h1>
                  <div className="container mx-auto my-20">
                    <div className="flex  feature-card-container mt-10 ">
                      {featuresCardData.map((card) => (
                        <Link key={card.id} href={card.redircetTo}>
                          <div className="card p-2 ">
                            <div className="">
                              <h3 className="text-2xl text-left">
                                {card.title}
                              </h3>
                              <img
                                className="m-2 mx-auto w-full h-36 rounded-xl"
                                src={card.imgUrl}
                              ></img>
                              {/* <p className="text-sm hidden sm:block">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Aspernatur similique vitae
                                doloribus liquid!
                              </p> */}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            {/* Services we offer end */}

            {/* Services card */}
            {/* <ParallaxLayer offset={6.2} sticky={{ start: 6.2, end: 6.3 }}>
            
          </ParallaxLayer> */}

            {/* Services cards over */}

            {/* Ayurgenic */}
            {/* <ParallaxLayer
            offset={4.5}
            speed={-3}
            style={{ backgroundColor: "#FB9241" }}
          />
          <ParallaxLayer
            offset={4.5}
            speed={1.8}
            sticky={{ start: 4.5, end: 5 }}
            // style={{ backgroundColor: "#87BCDE" }}
          >
            <div className="absolute -bottom-24 ">
              <img src="aurgenic/tea-trans.png" className="scale-125" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4.5} speed={2} sticky={{ start: 4.5, end: 5 }}>
            <div className="flex h-screen">
              <div className="absolute right-64 top-32 mx-auto">
                <h1 className=" m-20 mx-auto  text-3xl sm:text-5xl font-extralight mb-4 col-span-6 ">
                  <article>Aurgenic</article>
                  <span className=" text-orange-400"></span>
                </h1>
                <h3 className="text-2xl">
                  Delivering Nature at your door steps
                </h3>
              </div>
            </div>
          </ParallaxLayer> */}

            {/* <ParallaxLayer
            offset={4.5}
            speed={-20}
            sticky={{ start: 4.5, end: 5 }}
            // style={{ backgroundColor: "#87BCDE" }}
          >
            <div className="absolute -bottom-32 left-28 ">
              <img src="aurgenic/tea-trans.png" />
            </div>
          </ParallaxLayer> */}
            {/* Aurgenic over */}

            <ParallaxLayer offset={5.9} speed={0.5}>
              <div className="flex flex-col  absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-7xl font-extrabold text-center my-5">
                  Our own line of products
                </h1>
              </div>
            </ParallaxLayer>

            {/* Ayurgenic try 2 */}

            {/* <ParallaxLayer offset={7.3} sticky={{ start: 7.4, end: 7.9 }}>
              <div className="flex flex-col scale-100  absolute left-1/2 sm:left-3/4 transform -translate-x-1/2 -translate-y-1/2">
             
                <img src="Ayurgenic.png" className=" " />
                <h1 className="text-3xl font-extrabold text-center my-5">
                  Delivering nature at your door steps.
                </h1>
              </div>
            </ParallaxLayer> */}
            {/* <ParallaxLayer
              offset={6}
              speed={0.5}
              sticky={{ start: 6.2, end: 7.2 }}
            >
              <img
                // src="aurgenic/tea-trans.png"
                src="Ayurgenic_all.png"
                className="absolute  -bottom-20    "
              />
            </ParallaxLayer> */}

            <ParallaxLayer offset={6.2}>
              <div className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-[300px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[300px] lg:h-[400px] rounded-2xl relative border overflow-hidden   bg-gradient-to-r from-black to-green-500 border-green-900">
                  <div className="text-4xl sm:text-5xl lg:text-7xl font-bold  p-5 sm:p-10">
                    Ayurgenic
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl px-5 py-1 sm:p-10  ">
                    Bringing nature to your <br /> doorsteps
                  </h2>
                  <img
                    className=" w-32 sm:w-44 lg:w-72 absolute mr-10 bottom-0 right-0 scale-150 "
                    src="/Ayurgenic_all.png"
                  ></img>
                </div>
              </div>
            </ParallaxLayer>

            {/* Ayurgenic end */}
            {/* shalok */}
            <ParallaxLayer
              offset={7.4}
              //  speed={0}
            >
              {/* <div className="bg-gradient-to-r from-black to-orange-400 w-full h-96 m-48  "> */}
              <div className="wrapper-top ">
                <div className="flex h-screen grad-background ">
                  <div className=" absolute   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></div>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={7.4}>
              {/* <div className="bg-gradient-to-r from-black to-orange-400 w-full h-96 m-48  "> */}
              <div className=" absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 effect-shine p-2 ">
                <h1 className="text-4xl font-extrabold text-center my-5 ">
                  व्यायामात् लभते स्वास्थ्यं दीर्घायुष्यं बलं सुखं।
                  <br />
                  <br />
                  आरोग्यं परमं भाग्यं स्वास्थ्यं सर्वार्थसाधनम्॥
                </h1>
              </div>
            </ParallaxLayer>
            {/* Shalok end */}

            {/* CtA button banner */}

            <ParallaxLayer offset={8.4}>
              {/* <div className="absolute top-72 left-96 float-animate ">
              <img
                src="illustrations/Dumbell and Hand_02.png"
                className="h-60"
              />
            </div> */}
              <div>
                {/* <MyCTA
                  image_location={
                    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit"
                  }
                  text="Get Fit With Us"
                  btn_redirect={"/contact"}
                  btn_text="Join Now"
                /> */}

                <div className="wrapper-top ">
                  <div className="flex h-96 grad-background ">
                    <div className=" absolute  text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                      <h1>Get Fit with us</h1>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={8.8}>
              <Link href="/contact ">
                <button className="btn-grad ">Join Now</button>
              </Link>
            </ParallaxLayer>

            {/* Cta button banner end */}

            {/* Navbar */}
            {/* <ParallaxLayer factor={0} sticky={{ start: 0, end: 8 }}> */}
            <div className="nav-container">
              <Navbar />
            </div>
            {/* </ParallaxLayer> */}
            {/* <ParallaxLayer sticky={{ start: 10, end: 10 }}>
            <Footer />
          </ParallaxLayer> */}
          </Parallax>
        </div>
      </div>
    </div>
  );
}

import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Parallax as Par } from "react-scroll-parallax";
import MyCTA from "../components/design/MyCTA";
import Router from "next/router";
import { FiChevronDown } from "react-icons/fi";
const landing3 = () => {
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
      imgUrl: "/courses/basic.png",
    },
    {
      id: 3,
      title: "Courses",
      desc: "Lorem ipsum dorlor sit",
      redircetTo: "/courses",
      imgUrl:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit",
    },
    {
      id: 5,
      title: "Workshops",
      desc: "Lorem ipsum dorlor sit",
      redircetTo: "/events",
      imgUrl:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit",
    },
  ];
  return (
    <div className="h-screen">
      <div className="h-96 w-[250px]">
        <Parallax pages={9.8}>
          {/* hero */}
          <ParallaxLayer offset={0}>
            <div className="bg-cream mt-20">
              <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
                <div className="mt-5 my-auto lg:mt-24 xl:mt-28 flex flex-col w-full lg:w-1/2 justify-center  items-center lg:items-start text-center lg:text-left mb-5 md:mb-0 lg:pl-25">
                  <img
                    className="w-28 md:w-32 lg:w-36 xl:w-48"
                    src="/logo.png"
                  ></img>
                  <h1
                    data-aos="fade-right"
                    data-aos-once="true"
                    className="my-4 text-5xl lg:-ml-3 lg:text-8xl font-bold leading-tight text-darken text-white text-center cooperBlack"
                  >
                    Vyayam
                    <span className="text-orange-400 font-bold">shala</span>
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

                <div className="w-full lg:w-6/12 relative" id="girl">
                  <img
                    data-aos="fade-up"
                    data-aos-once="true"
                    className="w-10/12 mx-auto 2xl:-mb-20"
                    src="fitness_PNG196.png"
                  />
                </div>
              </div>
              <div className="-mt-[2%] mx-auto content-center justify-center flex">
                <FiChevronDown size={"40px"} />
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
            offset={1}
            speed={5}
            sticky={{ start: 1, end: 3.5 }}
            // style={{ backgroundColor: "#FB9241" }}
          >
            <video
              id="background-video"
              autoPlay
              loop
              muted
              //   poster="https://assets.codepen.io/6093409/river.jpg"
            >
              <source src="/video/gym-video.mp4" type="video/mp4" />
            </video>
          </ParallaxLayer>
          <ParallaxLayer speed={1.4} sticky={{ start: 0.9, end: 3.5 }}>
            <div className="flex h-screen">
              <h1 className="ml-10 absolute top-36 mx-auto font-extrabold">
                Level Up{" "}
              </h1>
            </div>
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
            offset={4.3}
            speed={-3}
            style={{ backgroundColor: "#FF7700", opacity: "1" }}
          />

          {/* <ParallaxLayer
            offset={4.5}
            speed={2}
            style={{ backgroundColor: "#251D3A", opacity: "1" }}
          /> */}
          {/* Backdrop end */}

          {/* Services we offer */}

          {/* Illustration images */}

          <ParallaxLayer
            offset={4.3}
            speed={2}
            sticky={{ start: 4.8, end: 5.2 }}
          >
            <div className="hidden sm:block">
              <div className="absolute top-[60%] left-[2%] float-animate ">
                <img src="illustrations/Dumbell_01.png" className="h-40 w-40" />
              </div>
              <div className="absolute top-0 left-1/2 float-animate ">
                <img src="illustrations/Dumbell_03.png" className="h-40 w-40" />
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
          </ParallaxLayer>

          <ParallaxLayer
            offset={4.3}
            speed={0}
            sticky={{ start: 4.8, end: 5.2 }}
          >
            {/* <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl"> */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className=" uppercase text-white font-extrabold text-center  mb-3 text-3xl  sm:text-4xl  lg:text-5xl">
                Services that we offer
              </h1>
              <div className="container mx-auto my-10">
                <div className="flex  feature-card-container">
                  {featuresCardData.map((card) => (
                    <Link key={card.id} href={card.redircetTo}>
                      <div className="card p-2">
                        <div className="">
                          <h3 className="text-2xl text-left">{card.title}</h3>
                          <img
                            className="m-2 mx-auto w-full h-1/2 rounded-xl"
                            src={card.imgUrl}
                          ></img>
                          <p className="text-sm hidden sm:block">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Aspernatur similique vitae doloribus liquid!
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
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

          <ParallaxLayer offset={6} speed={0}>
            <div className="flex flex-col  absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-7xl font-extrabold text-center my-5">
                Our own line of products
              </h1>
            </div>
          </ParallaxLayer>

          {/* Ayurgenic try 2 */}

          <ParallaxLayer offset={7.3} sticky={{ start: 7.4, end: 7.9 }}>
            <div className="flex flex-col scale-100  absolute left-1/2 sm:left-3/4 transform -translate-x-1/2 -translate-y-1/2">
              {/* <h1 className="text-7xl font-extrabold absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Ayurgenic
              </h1> */}
              <img src="Ayurgenic.png" className="  " />
              <h1 className="text-3xl font-extrabold text-center my-5">
                Delivering nature at your door steps.
              </h1>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={6}
            speed={0.5}
            sticky={{ start: 6.2, end: 7.2 }}
          >
            <img
              src="aurgenic/tea-trans.png"
              className="absolute scale-150 -bottom-20    "
            />
          </ParallaxLayer>

          {/* <ParallaxLayer offset={7.7} sticky={{ start: 7.8, end: 7.9 }}>
            <h1 className="text-3xl font-extrabold absolute top-[200px] left-3/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
              Delivering nature at your door steps.
            </h1>
          </ParallaxLayer> */}

          {/* Ayurgenic end */}

          {/* CtA button banner */}
          <ParallaxLayer offset={8.5}>
            {/* <div className="absolute top-72 left-96 float-animate ">
              <img
                src="illustrations/Dumbell and Hand_02.png"
                className="h-60"
              />
            </div> */}
            <div>
              <MyCTA
                image_location={
                  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit"
                }
                text="Get Fit With Us"
                btn_redirect={"/contact"}
                btn_text="Join Now"
              />
              <Footer />
            </div>
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
  );
};

export default landing3;

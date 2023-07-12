import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import {
  Parallax as SpringParallax,
  ParallaxLayer,
} from "@react-spring/parallax";
import MyCTA from "../components/design/MyCTA";
import styles from "../styles/Home.module.css";
// Landing Page
export default function Home() {
  // const { ref } = useParallax({ speed: 30 });

  return (
    <div className={styles.container}>
      <Head>
        <title>Vyayamshala Fitness</title>
        <meta name="description" content="Fitness and Wellness" />
        <meta property="og:url" content="vyayamshala.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vyayamshala Fitness" />
        <meta
          name="twitter:card"
          content="Vyayamshala Fitness | twitter preview"
        />
        <meta
          property="og:description"
          content="Fitness and Wellness | Gym | Yoga | Bodybuilding"
        />
        <meta property="og:image" content={"logo.png"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Hero Section */}
      <div className="bg-cream">
        <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
          <div className="mt-5 my-auto lg:mt-24 xl:mt-28 flex flex-col w-full lg:w-1/2 justify-center  items-center lg:items-start text-center lg:text-left mb-5 md:mb-0 lg:pl-25">
            <img className="w-28 md:w-32 lg:w-36 xl:w-48" src="/logo.png"></img>
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
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="700"
              className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
            >
              <button className="lg:mx-0 bg-orange-400  my-auto h-[50px] text-white text-xl font-bold rounded-2xl px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                <Link href="/contact">Join now</Link>
              </button>
              {/* <div className="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                      fill="#23BDEE"
                    />
                  </svg>
                </button>
                <span className="cursor-pointer">Watch how it works</span>
              </div> */}
            </div>
          </div>
          {/* <div className="w-full lg:w-6/12 lg:-mt-10 relative" id="girl"> */}
          <div className="w-full lg:w-6/12 relative" id="girl">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              className="w-10/12 mx-auto 2xl:-mb-20"
              src="fitness_PNG196.png"
            />
            {/* <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              className="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4"
            >
              <img
                className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src="img/calendar.svg"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              className="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating"
            >
              <svg
                className="h-16 sm:h-24"
                viewBox="0 0 149 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <rect
                    x="40"
                    y="32"
                    width="69"
                    height="69"
                    rx="14"
                    fill="#F3627C"
                  />
                </g>
                <rect
                  x="51.35"
                  y="44.075"
                  width="47.3"
                  height="44.85"
                  rx="8"
                  fill="white"
                />
                <path
                  d="M74.5 54.425V78.575"
                  stroke="#F25471"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M65.875 58.7375L65.875 78.575"
                  stroke="#F25471"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M83.125 63.9125V78.575"
                  stroke="#F25471"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="149"
                    height="149"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="20" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              className="absolute bottomy-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating"
            >
              <img
                className="bg-white bg-opacity-80 rounded-lg h-20 sm:h-28"
                src="img/ux-class.svg"
                alt=""
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              className="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4"
            >
              <img
                className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src="img/congrat.svg"
                alt=""
              />
            </div> */}
          </div>
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
      {/* <ParallaxBanner
        layers={[
          {
            image: "../../gym-back1.jpg",
            speed: -20,
          },
          {
            speed: -30,
            children: (
              // <div className="absolute inset-0 flex items-center justify-center">
              <div
                style={{ left: "30%", top: "45%" }}
                className="absolute    flex"
              >
                <h1 className="text-6xl text-white font-extrabold">
                  <b>Vyayam</b>
                  <span className="text-orange-400 font-bold">shala</span>
                </h1>
              </div>
            ),
            scale: [1, 2],
          },
          {
            speed: -40,
            // opacity: [3, -0.5],
            translateY: [20, 50],
            children: (
              <div className="absolute right-0.5 ">
                <img
                  src="../../fitness_PNG196.png"
                  className="text-8xl  text-white font-thin"
                />
              </div>
            ),
          },
          // { image: "../../fitness_PNG196.png", speed: -10 },
        ]}
        className="aspect-[2/1]"
      ></ParallaxBanner> */}

      {/* Hero Section end */}

      {/* Level UP */}
      {/* <div className="container">
        <div className="relative border-4 min-h-screen bg-red-200">
      
          <img
            src="https://picsum.photos/400/300"
            className="absolute  right-14 top-52"
          />
          <img
            src="https://picsum.photos/400/300"
            className="absolute  left-5 top-10"
          />
          <img
            src="https://picsum.photos/400/300"
            className="absolute  right-28 top-96"
          />
          <img
            src="https://picsum.photos/400/300"
            className="absolute  left-5 top-10"
          />
          <h1 className="absolute font-extrabold left-1/2 top-1/2 ">
            Level Up
          </h1>
          <h1 className="absolute font-extrabold left-1/2 top-1/2 ">
            for a better
          </h1>
          <h1 className="absolute font-extrabold left-1/2 top-1/2 ">
            Tomorrow
          </h1>
        </div>
      </div> */}
      {/* Level Up section end */}

      {/* level up section try 2 */}
      {/* <div className="container">
        <ParallaxBanner
          layers={[
            { image: "https://picsum.photos/400/300", speed: -20 },
            {
              speed: -20,
              children: (
                <div className="absolute flex top-96  items-center justify-center">
                  <h1 className="text-8xl text-white  font-thin">Level Up</h1>
                </div>
              ),
            },

            {
              speed: -30,
              children: (
                <div className="absolute  flex inset-0 items-center justify-center">
                  <h1 className="text-8xl text-white font-thin">
                    For A better{" "}
                  </h1>
                </div>
              ),
            },
            {
              speed: -40,
              children: (
                <div className="absolute  flex bottom-10 items-center justify-center">
                  <h1 className="text-8xl text-white font-thin">Tommorw</h1>
                </div>
              ),
            },
            { image: "/static/banner-foreground.png", speed: -10 },
          ]}
          className="aspect-[2/1]"
        >
         
        </ParallaxBanner>
      </div> */}

      {/* Level up try 3 */}
      {/* <div className="container h-96">
        <SpringParallax pages={2} style={{ top: "0", left: "0" }}>
          <ParallaxLayer
            offset={0}
            speed={2.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>Scroll down</p>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={2}
            style={{ backgroundColor: "#ff6d6d" }}
          />

          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <p>Scroll up</p>
          </ParallaxLayer>
        </SpringParallax>
      </div> */}

      {/* Level up try 3 end */}

      {/* Level up section try 2 end */}

      <div className="container mx-auto text-center my-15">
        <Parallax translateX={["-80px", "80px"]}>
          <div className="slow text-xl lg:text-5xl my-14 font-extrabold text-center ">
            Fitness
          </div>
        </Parallax>
        <div className="slow text-xl lg:text-5xl my-14 font-extrabold text-center ">
          And
        </div>

        <Parallax translateX={["80px", "-80px"]}>
          {/* <div className="fast" /> */}
          <div className="slow text-xl lg:text-5xl my-14 font-extrabold text-center">
            Wellness
          </div>
          {/* <div className="fast">hello</div> */}
        </Parallax>
      </div>

      <div className="container">
        <div className="my-0 grid grid-cols-1  lg:grid-cols-2 ">
          <div>
            {/* <img className="mx-auto p-10" src="https://picsum.photos/600/400" /> */}
            <img
              // ref={ref}
              className="mx-auto p-10 w-[450px] sm:w-[600px] lg:w-auto "
              data-aos="fade-right"
              data-aos-duration="1000"
              // src="https://www.transparentpng.com/thumb/fitness/zfUvyO-fitness-free-download.png"
              src="./landing/fitness.png"
              alt="fitness free download @transparentpng.com"
            />
          </div>

          <div
            className="p-10 my-auto "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* <h1 className=" text-6xl  lg:text-7xl text-center lg:text-left ">
              Wassup client
            </h1> */}
            <article>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center lg:text-left ">
                <b>Fitness</b>
              </h1>
            </article>
            <h2 className="w-[220px] sm:w-[420px] text-sm lg:text-lg  lg:w-[470px] pl-2 pt-5 text-center lg:text-left mx-auto lg:mx-0">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ipsa
              rerum error deserunt, autem eum vero voluptatibus sed, blanditiis
              atque laborum facere, sunt reiciendis sint.{" "}
            </h2>
            {/* <button className="custom-btn btn-15">Read More</button> */}
            {/* <button className="btn-grad">Read More</button> */}
          </div>
        </div>

        <div className="my-5 grid grid-cols-1  lg:grid-cols-2 ">
          <div
            className=" p-10 my-auto lg:order-first order-last  "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* <h1 className=" text-6xl  lg:text-7xl text-center lg:text-left ">
              Wassup client
            </h1> */}
            <article>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center lg:text-right">
                <b>Wellness</b>
              </h1>
            </article>
            <h2 className=" lg:float-right w-[220px] sm:w-[420px] text-sm lg:text-lg  lg:w-[470px] pl-2 pt-5 text-center lg:text-right mx-auto lg:mx-0">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ipsa
              rerum error deserunt, autem eum vero voluptatibus sed, blanditiis
              atque laborum facere, sunt reiciendis sint.{" "}
            </h2>
          </div>
          <div>
            {/* <img className="mx-auto p-10" src="https://picsum.photos/600/400" /> */}

            <img
              // ref={ref}
              className="mx-auto p-10 w-[450px]  sm:w-[600px] lg:w-auto "
              data-aos="fade-left"
              data-aos-duration="1000"
              // src="https://www.transparentpng.com/thumb/fitness/zfUvyO-fitness-free-download.png"
              src="./landing/wellness.png"
              alt="fitness free download @transparentpng.com"
            />
          </div>
        </div>
      </div>

      <div
        className="lg:w-3/4 mx-auto"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {/* <div className="flex justify-around my-10 p-5">
          <div className="w-[220px] p-5">
            <article>
              <h2 className="text-xl lg:text-2xl text-left">
                <b>lorem ipsum</b>
              </h2>
            </article>
            <h2 className="text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              rerum repellat quisquam tempora porro a debitis nisi, expedita
              neque, recusandae saepe odit! Aperiam, rem quasi!
            </h2>
          </div>
          <div className="w-[220px] p-5">
            <article>
              <h2 className="text-xl lg:text-2xl text-left">
                <b>lorem ipsum</b>
              </h2>
            </article>
            <h2 className="text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              rerum repellat quisquam tempora porro a debitis nisi, expedita
              neque, recusandae saepe odit! Aperiam, rem quasi!
            </h2>
          </div>
          <div className="w-[220px] p-5">
            <article>
              <h2 className="text-xl lg:text-2xl text-left">
                <b>lorem ipsum</b>
              </h2>
            </article>
            <h2 className="text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              rerum repellat quisquam tempora porro a debitis nisi, expedita
              neque, recusandae saepe odit! Aperiam, rem quasi!
            </h2>
          </div>
        </div> */}
      </div>

      <div>
        <div className="container flex">
          <div className="card">
            <h3 className="title">Card 1</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Card 2</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Card 3</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Card 4</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <MyCTA
        image_location={
          "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit"
        }
        text="Get Fit With Us"
        btn_redirect={"/contact"}
        btn_text="Join Now"
      />
    </div>
  );
}

import Link from "next/link";
import React from "react";
import MyCTA from "../../components/design/MyCTA";
import MyParallaxBanner from "../../components/design/MyParallaxBanner";
import Head from "next/head";

// About 3-4

// Call to action button

const index = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Events | Vyayamshala Fitness </title>
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
        text={"Events"}
      />{" "}
      {/* <h1 className="  mx-auto  text-xl sm:text-3xl font-extralight m-10 col-span-3 ">
        Fitness <span className=" text-orange-400">Programs</span>
      </h1> */}
      <h1 className=" m-10 mx-auto  text-3xl sm:text-5xl font-extralight mb-4 col-span-6 ">
        <article>Projects</article>
        <span className=" text-orange-400"></span>
      </h1>
      <div className="container mx-auto grid grid-cols-5 my-5 ">
        <div className="col-span-1"></div>
        <div className="p-10 md:p-5 hover:scale-105 duration-300 relative lg:col-span-3 col-span-5 grayscale hover:grayscale-0  aspect-[4.4/3] ">
          <img
            className="mx-auto rounded-2xl h-full  aspect-[4.4/3] "
            src="/events/fnwa.png"
            alt=""
          />
          <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className=" uppercase text-white font-extrabold text-center  mb-3 text-2xl  sm:text-3xl  lg:text-4xl">
                Fitness & Wellness Assurance
              </h1>
              {/* <button className="rounded-full mx-auto text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
            Start a class today
          </button> */}
              <Link href="/events/fitness/">
                <button className="rounded-full mx-auto text-black bg-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>{" "}
        <div className="col-span-1"></div>
      </div>
      <div className="container mx-auto grid grid-cols-6 my-5 ">
        <h1 className=" m-20 mx-auto  text-3xl sm:text-5xl font-extralight mb-4 col-span-6 ">
          <article>Workshops</article>
          <span className=" text-orange-400"></span>
        </h1>
        <div className="grid-span-1"></div>
        <div className=" p-10 md:p-5 hover:scale-105 duration-300 relative lg:col-span-2 col-span-6  grayscale hover:grayscale-0 aspect-[4.4/3] ">
          <img
            className="mx-auto rounded-2xl h-full aspect-[4.4/3]  "
            src="/events/school.png"
            alt=""
          />
          <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className=" uppercase text-white font-extrabold text-center  mb-3 text-4xl  sm:text-3xl  lg:text-5xl">
                Schools
              </h1>
              {/* <button className="rounded-full mx-auto text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
            Start a class today
          </button> */}
              {/* <Link href="/events/wellness/organ_donation">
                <button className="rounded-full mx-auto text-black bg-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                  View More
                </button>
              </Link> */}
            </div>
          </div>
        </div>{" "}
        <div className="p-10 md:p-5 hover:scale-105 duration-300 relative lg:col-span-2 col-span-6 grayscale hover:grayscale-0  aspect-[4.4/3] ">
          <img
            className="mx-auto rounded-2xl h-full aspect-[4.4/3] "
            src="/events/corporate.png"
            alt=""
          />
          <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className=" uppercase text-white font-extrabold text-center  mb-3 text-4xl  sm:text-3xl  lg:text-5xl">
                Corporate
              </h1>
              {/* <button className="rounded-full mx-auto text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
            Start a class today
          </button> */}
              {/* <Link href="/events/wellness/organ_donation">
                <button className="rounded-full mx-auto text-black bg-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                  View More
                </button>
              </Link> */}
            </div>
          </div>
        </div>{" "}
        <h1 className=" m-20 mx-auto  text-3xl sm:text-5xl font-extralight mb-4 col-span-6 ">
          <article>Non-Profit Work</article>
          <span className=" text-orange-400"></span>
        </h1>
        <div className="p-10 md:p-5 lg:w-full hover:scale-105 duration-300 relative lg:col-span-2 col-span-6 grayscale hover:grayscale-0  aspect-[4.4/3] ">
          <img
            className="mx-auto rounded-2xl h-full  aspect-[4.4/3] "
            src="/events/blood_thumbnail.jpg"
            alt=""
          />
          <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className=" uppercase text-white font-extrabold text-center  mb-3 text-4xl  sm:text-3xl  lg:text-5xl">
                Blood Donation
              </h1>
              <Link href="/events/wellness/blood_donation">
                <button className="rounded-full mx-auto text-black bg-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-10 md:p-5 hover:scale-105 duration-300 relative lg:col-span-2 col-span-6 grayscale hover:grayscale-0  aspect-[4.4/3] ">
          <img
            className="mx-auto rounded-2xl h-full  aspect-[4.4/3] "
            src="/events/organ_thumbnail.jpg"
            alt=""
          />
          <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className=" uppercase text-white font-extrabold text-center  mb-3 text-4xl  sm:text-3xl  lg:text-5xl">
                Organ Donation
              </h1>
              {/* <button className="rounded-full mx-auto text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
            Start a class today
          </button> */}
              <Link href="/events/wellness/organ_donation">
                <button className="rounded-full mx-auto text-black bg-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>{" "}
        <div className="p-10 md:p-5 hover:scale-105 duration-300 relative lg:col-span-2 col-span-6 grayscale hover:grayscale-0  aspect-[4.4/3] ">
          <img
            className="mx-auto rounded-2xl h-full aspect-[4.4/3] "
            src="/events/mudbowl.png"
            alt=""
          />
          <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className=" uppercase text-white font-extrabold text-center  mb-3 text-4xl  sm:text-3xl  lg:text-5xl">
                Mud Bowl
              </h1>
              {/* <button className="rounded-full mx-auto text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
            Start a class today
          </button> */}
              <Link href="/events/wellness/mud_bowls">
                <button className="rounded-full mx-auto text-black bg-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>{" "}
      </div>
      <MyCTA
        image_location={
          "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit"
        }
        text="Planning to to organise one??"
        btn_redirect={"/contact"}
        btn_text="Patner with us"
      />
    </div>
  );
};

export default index;

import React from "react";
import MyCTA from "../../components/design/MyCTA";
import Head from "next/head";
// About 3-4

// Call to action button

const workshop = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Workshop | Vyayamshala Fitness </title>
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
      <div className="container mx-auto grid grid-cols-3 my-5">
        <h1 className="  mx-auto  text-xl sm:text-3xl font-extralight m-10 col-span-3 ">
          Fitness <span className=" text-orange-400">Programs</span>
        </h1>
        <div className="p-10 md:p-5 lg:w-full hover:scale-105 duration-300 relative lg:col-span-1 col-span-3 grayscale hover:grayscale-0 ">
          <img
            className="mx-auto rounded-2xl h-full"
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
            </div>
          </div>
        </div>
        <div className="p-10 md:p-5 hover:scale-105 duration-300 relative lg:col-span-1 col-span-3 grayscale hover:grayscale-0 ">
          <img
            className="mx-auto rounded-2xl h-full"
            src="/events/corporate.png"
            alt=""
          />
          <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className=" uppercase text-white font-extrabold text-center  mb-3 text-4xl  sm:text-3xl  lg:text-5xl">
                Corporates
              </h1>
              {/* <button className="rounded-full mx-auto text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
            Start a class today
          </button> */}
            </div>
          </div>
        </div>{" "}
        <div className="p-10 md:p-5 hover:scale-105 duration-300 relative lg:col-span-1 col-span-3 grayscale hover:grayscale-0 ">
          <img
            className="mx-auto rounded-2xl h-full"
            src="/events/np.png"
            alt=""
          />
          <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className=" uppercase text-white font-extrabold text-center  mb-3 text-4xl  sm:text-3xl  lg:text-5xl">
                NPO
              </h1>
              {/* <button className="rounded-full mx-auto text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
            Start a class today
          </button> */}
            </div>
          </div>
        </div>
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

export default workshop;

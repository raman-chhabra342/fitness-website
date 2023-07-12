import React from "react";
import MyParallaxBanner from "../../components/design/MyParallaxBanner";
import MyCTA from "../../components/design/MyCTA";
import Head from "next/head";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "../../../certificates/img1.jpg",
    thumbnail: "../../../certificates/img1.jpg",
  },
  {
    original: "../../../certificates/img2.jpg",
    thumbnail: "../../../certificates/img2.jpg",
  },
  {
    original: "../../../certificates/img3.jpg",
    thumbnail: "../../../certificates/img3.jpg",
  },
  {
    original: "../../../certificates/img4.jpg",
    thumbnail: "../../../certificates/img4.jpg",
  },
  {
    original: "../../../certificates/img5.jpg",
    thumbnail: "../../../certificates/img5.jpg",
  },
  {
    original: "../../../certificates/img6.jpg",
    thumbnail: "../../../certificates/img6.jpg",
  },
  {
    original: "../../../certificates/img7.jpg",
    thumbnail: "../../../certificates/img7.jpg",
  },
  {
    original: "../../../certificates/img8.jpg",
    thumbnail: "../../../certificates/img8.jpg",
  },
  {
    original: "../../../certificates/img9.jpg",
    thumbnail: "../../../certificates/img9.jpg",
  },
  {
    original: "../../../certificates/img10.jpg",
    thumbnail: "../../../certificates/img10.jpg",
  },
  {
    original: "../../../certificates/img11.jpg",
    thumbnail: "../../../certificates/img11.jpg",
  },
  {
    original: "../../../certificates/img12.jpg",
    thumbnail: "../../../certificates/img12.jpg",
  },
  {
    original: "../../../certificates/img13.jpg",
    thumbnail: "../../../certificates/img13.jpg",
  },
  {
    original: "../../../certificates/img14.jpg",
    thumbnail: "../../../certificates/img14.jpg",
  },
];

const courses = () => {
  return (
    <div>
      <Head>
        <title>Courses | Vyayamshala Fitness</title>
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

      {/* <MyParallaxBanner
        imageUrl="/courses/delete/basic.png"
        text={"Courses at Vyayamshala"}
      /> */}
      <div className="container mx-auto my-20">
        <div
          data-aos="flip-down"
          className="text-center max-w-screen-md mx-auto"
        >
          <h1 className="text-3xl lg:text-5xl font-bold mb-7">
            Courses at Vyayam<span className="text-orange-400">shala</span>
          </h1>
          {/* <p className="text-gray-500">
          Skilline is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p> */}
        </div>

        <div
          data-aos="fade-up"
          className="p-10 grid grid-cols-6 justify-center"
        >
          <div className="grid grid-cols-6 col-span-6">
            {/* <h1 className="  mx-auto  text-xl lg:text-3xl font-extralight mb-4 col-span-6 ">
              Personal Fitness Trainer{" "}
              <span className=" text-orange-400">- 3 month course</span>
            </h1> */}

            <p className=" mx-auto text-center  text-xl lg:text-2xl font-light mb-4 col-span-6">
              {
                "   Vyayamshala was in the fitness industry since 2014. It’s been more than a decade of educating people in fitness. Every year hundreds of students pass out from the institute. VYAYAMSHALA offers the most exciting and up-to-date curriculum as well as ongoing training in all aspects of the fitness industry."
              }
            </p>
            <p className=" mx-auto text-center  text-xl lg:text-2xl font-light mb-4 col-span-6">
              {
                "Vyayamshala is the only Advanced Personal Trainer program, which offers you low-cost tuition, fast test results, and complete career development, and also trained its trainers under the best faculty. With complete practical training. Becoming a Vyayamshala certified Advanced Personal trainer is your foundation for success. It offers you a complete approach to fitness, wellness, and business skills. Invest in yourself and become a Vyayamshala certified personal trainer. We offer you good business projects. ALL you can associate with Vyayamshala after clearing the certification from the very first day."
              }
            </p>
            <div className="  hover:scale-105 duration-300 relative p-5 col-span-6 md:col-span-3 grayscale hover:grayscale-0 max-h-[500px] aspect-[4/3]">
              <img
                className="mx-auto rounded-2xl h-full "
                src="/courses/advance.png"
                alt=""
              />
              <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className=" uppercase text-white font-extrabold text-center  mb-3 text-4xl  sm:text-5xl  lg:text-7xl">
                    ADVANCE TRAINING
                  </h1>
                  <h2 className="font-bold text-xl tracking-widest text-center">
                    ( 3 Months )
                  </h2>
                  {/* <button className="rounded-full mx-auto text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                  Start a class today
                </button> */}
                </div>
              </div>
            </div>

            <div className="  hover:scale-105 duration-300 relative p-5 col-span-6 md:col-span-3 grayscale hover:grayscale-0 max-h-[500px] aspect-[4/3]">
              {/*1st element*/}
              <img
                className="mx-auto rounded-2xl h-full "
                src="/courses/master.png"
                alt=""
              />
              <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className=" uppercase text-white font-extrabold text-center  mb-3 text-4xl  sm:text-5xl  lg:text-7xl">
                    MASTER TRAINING
                  </h1>
                  <h2 className="font-bold text-xl tracking-widest text-center">
                    ( 6 Months )
                  </h2>

                  {/* <button className="rounded-full mx-auto text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                  Start a class today
                </button> */}
                </div>
              </div>
            </div>
          </div>

          <div className="  hover:scale-105 duration-300  relative p-5   col-span-6 md:col-span-2 grayscale hover:grayscale-0 max-h-[500px] lg:max-h-[300px] aspect-[4/3]">
            {/*1st element*/}
            <img
              className="mx-auto rounded-2xl h-full  "
              src="/courses/trainer3.png"
              alt=""
            />
            <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="uppercase text-white font-extrabold text-center  mb-3 text-3xl  sm:text-xl lg:text-3xl ">
                  FUNCTIONAL TRAINER
                </h1>
                <h2 className="font-bold text-sm tracking-widest text-center">
                  ( 3 Months )
                </h2>

                {/* <button className="rounded-full mx-auto text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                Start a class today
              </button> */}
              </div>
            </div>
          </div>

          <div className="  hover:scale-105 duration-300 relative p-5   col-span-6 md:col-span-2 grayscale hover:grayscale-0  max-h-[500px] lg:max-h-[300px] aspect-[4/3]">
            {/*1st element*/}
            <img
              className="mx-auto rounded-2xl h-full  "
              src="/courses/diet.png"
              alt=""
            />
            <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="uppercase text-white font-extrabold text-center  mb-3 text-3xl  sm:text-xl lg:text-3xl ">
                  NUTRITION & DIET
                </h1>
                <h2 className="font-bold text-sm tracking-widest text-center">
                  ( 1 Month )
                </h2>

                {/* <button className="rounded-full mx-auto text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                Start a class today
              </button> */}
              </div>
            </div>
          </div>

          <div className="  hover:scale-105 duration-300 relative p-5   col-span-6 md:col-span-2 grayscale hover:grayscale-0  max-h-[500px] lg:max-h-[300px] aspect-[4/3]">
            <img
              className="mx-auto rounded-2xl overflow-none h-full  "
              src="/courses/cpr.png"
              alt=""
            />
            <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="uppercase text-white font-extrabold text-center  mb-3 text-3xl  sm:text-xl lg:text-3xl ">
                  FIRST AID & CPR
                </h1>
                <h2 className="font-bold text-sm tracking-widest text-center">
                  ( Ask branch )
                </h2>

                {/* <button className="rounded-full mx-auto text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                Start a class today
              </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container p-10 m-5 mx-auto  ">
          <h1 className="text-3xl lg:text-5xl font-bold mb-10 text-center">
            Certificated by Vyayam
            <span className="text-orange-400">shala</span>
          </h1>
          <ImageGallery items={images} autoPlay="true" />
        </div>
      </div>
      <MyCTA
        image_location={
          "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit"
        }
        text="Feel Free to contact us"
        btn_redirect={"/contact"}
        btn_text="Contact Us"
      />
    </div>
  );
};

export default courses;

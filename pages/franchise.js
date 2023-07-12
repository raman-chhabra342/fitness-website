import React from "react";
import MyCTA from "../components/design/MyCTA";
import Head from "next/head";

const franchise = () => {
  return (
    <div className="">
      <Head>
        <title>Franchise | Vyayamshala Fitness </title>
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
      <h1 className=" text-center m-10 text-xl lg:text-3xl font-extralight ">
        Vyayamshala <span className=" text-orange-400">- Franchise</span>
      </h1>
      {/* <div className="m-10 grid grid-cols-6 col-span-6">

      <h1 className="  mx-auto  text-xl lg:text-3xl font-extralight mb-4 col-span-6 ">
        Vyayamshala{" "}
        <span className=" text-orange-400">- Franchise</span>
      </h1>

      <div className=" hover:scale-105 duration-300 relative p-5 col-span-6 md:col-span-3 grayscale hover:grayscale-0 ">
        <img
          className="mx-auto rounded-2xl h-full"
          src="/courses/basic3.png"
          alt=""
        />
        <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className=" uppercase text-white font-extrabold text-center  mb-3 text-4xl  sm:text-5xl  lg:text-7xl">
              BASIC Franchise
            </h1>
            <button className="rounded-full mx-auto text-white borderr text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              Start a class today
            </button>
          </div>
        </div>
      </div>
  
      <div className="  hover:scale-105 duration-300 relative p-5 col-span-6 md:col-span-3 grayscale hover:grayscale-0 ">
 
        <img
          className="mx-auto rounded-2xl h-full "
          src="/courses/advance.png"
          alt=""
        />
        <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className=" uppercase text-white font-extrabold text-center  mb-3 text-4xl  sm:text-5xl  lg:text-7xl">
              ADVANCED Franchise
            </h1>
            <button className="rounded-full mx-auto text-white borderr text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              Start a class today
            </button>
          </div>
        </div>
      </div>
      
    </div> */}

      <div className="container mx-auto">
        <div className="my-0 grid grid-cols-1  lg:grid-cols-2 ">
          <div>
            {/* <img className="mx-auto p-10" src="https://picsum.photos/600/400" /> */}
            <img
              // ref={ref}
              className="mx-auto w-[450px] sm:w-[600px] lg:w-auto  aspect-[4.4/3] rounded-xl"
              data-aos="fade-right"
              data-aos-duration="1000"
              // src="https://www.transparentpng.com/thumb/fitness/zfUvyO-fitness-free-download.png"
              src="./franchise/luxury.jpeg"
              alt="fitness free download @transparentpng.com"
            />
          </div>

          <div
            className=" p-10 my-auto grid grid-cols-2 borderr-2 m-2 h-full rounded-xl "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* <h1 className=" text-6xl  lg:text-7xl text-center lg:text-left ">
              Wassup client
            </h1> */}
            <article className="col-span-2 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl ">
                <b>Luxury</b>
              </h1>
            </article>

            <div className="col-span-1 text-center">
              <h2 className="font-bold text-xl my-3">Space Required</h2>
              <h2 className="text-lg sm:text-2xl font-extralight">
                5000 - 7000 Sq.Ft.
              </h2>
            </div>

            <div className="col-span-1 text-center">
              <h2 className="font-bold text-xl my-3">Investment</h2>
              <h2 className="text-lg sm:text-2xl font-extralight">
                {" "}
                1 - 1.5 Crores
              </h2>
            </div>

            <div className="col-span-2 text-center my-3">
              <h2 className="font-bold text-xl">Inclusions</h2>
              <h2 className=" font-extralight text-xl">
                Yoga, Group Exercise, Spinning Studio, Cardio, Strength, Free
                Weight Area, Lockers, Steam Bath, Graphic 3D interior, Ayurgenic
                Healthcare space for organic and health supplements
              </h2>
            </div>
            {/* <button className="custom-btn btn-15">Read More</button> */}
            {/* <button className="btn-grad">Read More</button> */}
          </div>
        </div>

        <div className="my-5 grid grid-cols-1  lg:grid-cols-2 ">
          <div
            className=" p-10 my-auto lg:order-first order-last grid grid-cols-2 borderr-2 m-2 h-full rounded-xl "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* <h1 className=" text-6xl  lg:text-7xl text-center lg:text-left ">
              Wassup client
            </h1> */}
            <article className="col-span-2 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl ">
                <b>Hardcore</b>
              </h1>
            </article>

            <div className="col-span-1 text-center">
              <h2 className="font-bold text-xl my-3">Space Required</h2>
              <h2 className="text-lg sm:text-2xl font-extralight">
                3000 - 4500 Sq.Ft.
              </h2>
            </div>

            <div className="col-span-1 text-center">
              <h2 className="font-bold text-xl my-3">Investment</h2>
              <h2 className="text-lg sm:text-2xl font-extralight">
                {" "}
                50 - 60 Lakhs
              </h2>
            </div>

            <div className="col-span-2 text-center my-3">
              <h2 className="font-bold text-xl">Inclusions</h2>
              <h2 className=" font-extralight text-xl">
                Cardio, Strength, Free Weight Area, Lockers, Steam Bath, Graphic
                3D interior, Ayurgenic Healthcare space for organic and health
                supplements
              </h2>
            </div>
          </div>
          <div>
            {/* <img className="mx-auto p-10" src="https://picsum.photos/600/400" /> */}

            <img
              // ref={ref}
              className="mx-auto  w-[450px]  sm:w-[600px] lg:w-auto   aspect-[4.4/3]  rounded-xl"
              data-aos="fade-left"
              data-aos-duration="1000"
              // src="https://www.transparentpng.com/thumb/fitness/zfUvyO-fitness-free-download.png"
              src="./franchise/hardcore.jpeg"
              alt="fitness free download @transparentpng.com"
            />
          </div>
        </div>

        <div className="my-0 grid grid-cols-1  lg:grid-cols-2 ">
          <div>
            {/* <img className="mx-auto p-10" src="https://picsum.photos/600/400" /> */}
            <img
              // ref={ref}
              className="mx-auto w-[450px] sm:w-[600px] lg:w-auto  aspect-[4.4/3] rounded-xl"
              data-aos="fade-right"
              data-aos-duration="1000"
              // src="https://www.transparentpng.com/thumb/fitness/zfUvyO-fitness-free-download.png"
              src="./franchise/home.jpeg"
              alt="fitness free download @transparentpng.com"
            />
          </div>

          <div
            className=" p-10 my-auto grid grid-cols-2 borderr-2 m-2 h-full rounded-xl "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* <h1 className=" text-6xl  lg:text-7xl text-center lg:text-left ">
              Wassup client
            </h1> */}
            <article className="col-span-2 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl ">
                <b>Mini</b>
              </h1>
            </article>

            <div className="col-span-1 text-center">
              <h2 className="font-bold text-xl my-3">Space Required </h2>
              <h2 className="text-lg sm:text-2xl font-extralight">
                600 - 1000 Sq. Ft.
              </h2>
            </div>

            <div className="col-span-1 text-center">
              <h2 className="font-bold text-xl my-3">Investment</h2>
              <h2 className="text-lg sm:text-2xl font-extralight">
                {" "}
                2 - 5 Lakhs
              </h2>
            </div>

            <div className="col-span-2 text-center my-3">
              <h2 className="font-bold text-xl">Inclusions</h2>
              <h2 className=" font-extralight text-xl">
                Treadmill, Spinning, Dumbbells, Rods, Barbell,Functional
                Accessories ( Rip60 , Exercise Ball, Medicine Ball, Kettle
                Bells, Agility Ladders, Mat, Rope, etc), Online - Offline
                Training Maintenance, Diet, Supplements assistance, Setup Design
              </h2>
            </div>
            {/* <button className="custom-btn btn-15">Read More</button> */}
            {/* <button className="btn-grad">Read More</button> */}
          </div>
        </div>

        <div className="my-5 grid grid-cols-1  lg:grid-cols-2 ">
          <div
            className=" p-10 my-auto lg:order-first order-last grid grid-cols-2 borderr-2 m-2 h-full rounded-xl "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <article className="col-span-2 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl ">
                <b>Collaborated</b>
              </h1>
            </article>

            {/* <div className="col-span-1 text-center">
              <h2 className="font-bold text-xl my-3">Space Required</h2>
              <h2 className="text-lg sm:text-2xl font-extralight">
                300 - 500 Sq. Ft.
              </h2>
            </div>

            <div className="col-span-1 text-center">
              <h2 className="font-bold text-xl my-3">Investment</h2>
              <h2 className="text-lg sm:text-2xl font-extralight">
                {" "}
                1 - 2 Crores
              </h2>
            </div> */}

            <div className="col-span-2 text-center my-3">
              <h2 className="font-bold text-xl">Inclusions</h2>
              <h2 className=" font-extralight text-xl">
                Client Walk in, Brand Support, Ayurgenic Healthcare Supplements,
                Percentage - Incentive Basis on courses Clients, Projects.
              </h2>
            </div>
          </div>
          <div>
            {/* <img className="mx-auto p-10" src="https://picsum.photos/600/400" /> */}

            <img
              // ref={ref}
              className="mx-auto  w-[450px]  sm:w-[600px] lg:w-auto   aspect-[4.4/3]  rounded-xl"
              data-aos="fade-left"
              data-aos-duration="1000"
              // src="https://www.transparentpng.com/thumb/fitness/zfUvyO-fitness-free-download.png"
              src="./franchise/collab.jpeg"
              alt="fitness free download @transparentpng.com"
            />
          </div>
        </div>

        <div className=" p-10  " data-aos="fade-up" data-aos-duration="1000">
          {/* <h1 className=" text-6xl  lg:text-7xl text-center lg:text-left ">
              Wassup client
            </h1> */}
          <article>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center">
              <b>Why Vyayamshala ?</b>
            </h1>
          </article>
          <ul className="list-discc text-center font-extralight leading-loose w-3/4 sm:w-1/2 mx-auto m-3 text-2xl">
            <li>Medical Assistance ( Best team of doctors and dieticians )</li>
            <li>Lifestyle and Wellness coaches</li>
            <li>Best Certified Trainers</li>
            <li>Ayurgenic Healthcare Section</li>
            <li>Brand Marketing Make in India Brand</li>
            <li>Best ROI</li>
          </ul>
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

export default franchise;

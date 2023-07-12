import React from "react";
import Head from "next/head";
import MyCTA from "../../../components/design/MyCTA";

const index = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Fitness & Wellness Assurance | Vyayamshala Fitness</title>
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

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="mx-auto text-center"
      >
        <h2 className="text-5xl font-bold m-10">
          FITNESS & WELLNESS <br /> ASSURANCE
        </h2>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid order-last lg:order-first grid-cols-1 lg:grid-cols-2 mb-20"
      >
        <div className="my-auto mx-auto">
          <p className="p-10 text-2xl">
            Our main motive is to transform people inner motivation and change
            the mindset for fitness, depending on where they are in their
            fitness and wellness journey. We believe no matter the situation
            there is always a need for motivation to support any change. It is
            the key to help people initiating and maintaining behavior change,
            and ultimately to achieve long lasting health goals. We are focusing
            on overall fitness.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" order-first lg:order-last "
        >
          <img className=" mx-auto rounded-xl" src="/courses/advance.png"></img>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-full text-center text-4xl p-10 py-20 bg-orange-400 text-black font-extrabold"
      >
        First time in History a complete overall fitness and wellness package
        introduced by Vyayamshala.
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-xl rounded-xl mx-3 sm:mx-10 my-5 relative mt-32 cardblock m-0 p-10  bg-white  border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="mt-5 font">
          <h2 className="text-4xl text-center my-5 ">Services </h2>
          <div className="mx-auto">
            <li className="m-3">
              {" "}
              Workout is done with offline and online sessions.
            </li>
            <li className="m-3">One to One counseling and progress report.</li>
            <li className="m-3">Regular Health Checkups and full-body test.</li>
            <li className="m-3">
              Replace Chemical and adulterated daily use and dietary products
              with Organic and Ayurvedic products.
            </li>
            <li className="m-3">One to One counseling and progress report.</li>
            <li className="m-3">Health Insurance. </li>
            <li className="m-3">
              Diet, Nutrition and Medical counseling sessions with the best
              Doctors and Dieticians.
            </li>
            <li className="m-3">Therapies like Panchkarma & Meditation.</li>
            <li className="m-3">
              All facility under one roof enjoys, transform, and feel the change
              with us.
            </li>
          </div>
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

export default index;

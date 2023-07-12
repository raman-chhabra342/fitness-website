import React from "react";
// 3-4 before and after pics
// JS slider effect
import { ParallaxBanner, useParallax } from "react-scroll-parallax";
import MyParallaxBanner from "../components/design/MyParallaxBanner";
// import "../styles/transformation.css";

const transformation = () => {
  return (
    <div>
      {/* Section 1  */}

      <MyParallaxBanner
        imageUrl="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit"
        text={"Transformations"}
      />
      {/* Section 1  end */}

      {/* Section - 2 */}
      <div className="grid container justify-center mx-auto my-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className="cardblock m-5 p-2 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit" />
        </div>

        <div className="cardblock m-5 p-2 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit" />
        </div>

        <div className="cardblock m-5 p-2 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit" />
        </div>

        <div className="cardblock m-5 p-2 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit" />
        </div>

        <div className="cardblock m-5 p-2 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit" />
        </div>

        <div className="cardblock m-5 p-2 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit" />
        </div>
      </div>
      {/* Section 2 end */}

      {/* Section 3 */}
      <ParallaxBanner
        layers={[
          {
            image:
              "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit",
            speed: -15,
          },
        ]}
        className="aspect-[4/1]"
      >
        <div className=" absolute inset-0 flex items-center justify-center">
          <center>
            <h1 className="text-2xl text-center m-5 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              saepe perferendis praesentium blanditiis eveniet vel?
            </h1>

            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Button
            </button>
          </center>
        </div>
      </ParallaxBanner>
      {/* Section 3 end */}
    </div>
  );
};

export default transformation;

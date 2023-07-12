import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
// Gym ki  mission
// Heaing  , Paragraphn , img
//
const mission = () => {
  return (
    <div className="container mx-auto">
      <ParallaxBanner
        layers={[
          {
            image:
              "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit",
            speed: -15,
          },
        ]}
        className="aspect-[2/5] sm:aspect-[2/5] md:aspect-[2/5] lg:aspect-[2/1]"
      >
        <div className="absolute inset-0 flex items-center justify-center w-full sm:w-1/2 mx-auto">
          <div className="relative cardblock m-0 p-10 min-w-full  bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            {/*  */}
            <article>
              <h1 className="text-5xl text-center">
                <b>Mission</b>
              </h1>
            </article>
            <br />
            <div className="text-center">
              <h3>Vyamshala Fitness Academy</h3>
              <p>
                An initiative to promote our passion for fitness and empowering
                you to make the change!
              </p>
              <br />
              <p>
                {
                  "                  Our motive is transforming peoples lives by motivating them to  change their mindset for fitness and health. We believe there is  always a need for support and motivation, no matter the  individual's situation in the fitness journey. Fitness is the  key to achieving long lasting heath goals and mental peace. We  believe in overall fitness and therefore help people initiate  the much needed change and maintain the same. We understand what  it's like to struggle with wellness and hence provide support in  every possible way to achieve and sustain your fitness goals."
                }
              </p>
              <br />
              <p>
                Make yourself stronger than your excuses. The quality of your
                health determines the quality of your life and nothing is more
                important than that. So, embark the fitness journey and
                experience wellness like never before!
              </p>
            </div>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default mission;

import Section from "./styled";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import SplitText from "src/utils/Split3.min";
import useOnScreen from "src/hooks/useOnScreen";
import cn from "classnames";

const Playground = () => {
  const ref = useRef(null);

  const horizontalScrollContainer = () => {
    return (
      <div className="flex flex-col items-center justify-center h-[100vh] relative">
        <div id="wrapper ">
          <div
            className="block-item one "
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
          >
            <span>LMAOOOOOOOOOOO</span>
          </div>
          <div
            className="block-item two "
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="12"
          >
            <span>LOOOONAAAAAA</span>
          </div>
          <div
            className="block-item  three"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="2"
          >
            <span>LOOOOOOOOOOOL</span>
          </div>

          <div
            className="block-item  four"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-2"
          >
            <span>GONNA GOOOO FASTTTT</span>
          </div>
        </div>
      </div>
    );
  };

  const lerbScrollContainer = () => {
    return (
      <div className="container mx-auto" id="lerb-container">
        <div className="flex flex-col items-center justify-center h-[100vh] uppercase text-[10vh]">
          <div className="flex">
            <span
              data-scroll
              data-scroll-delay="0.2"
              data-scroll-speed="6"
              data-scroll-repeat
            >
              1.
            </span>
            <span data-scroll data-scroll-delay="0.6" data-scroll-speed="6">
              Let's it wave
            </span>
          </div>
          <div className="flex">
            <span
              data-scroll
              data-scroll-delay="0.2"
              data-scroll-speed="6"
              data-scroll-repeat
            >
              2.
            </span>
            <span data-scroll data-scroll-delay="0.06" data-scroll-speed="6">
              ME TOO!
            </span>
          </div>
          <div className="flex relative">
            {/* <span
            className="absolute"
            data-scroll
            data-scroll-delay="0.2"
            data-scroll-speed="6"
            data-scroll-repeat
          >
            3.
          </span> */}
            <div className="title" data-scroll>
              <span data-scroll data-scroll-delay="0.02" data-scroll-speed="8">
                B
              </span>
              <span data-scroll data-scroll-delay="0.03" data-scroll-speed="8">
                y
              </span>
              <span data-scroll data-scroll-delay="0.04" data-scroll-speed="8">
                L
              </span>
              <span data-scroll data-scroll-delay="0.05" data-scroll-speed="8">
                e
              </span>
              <span data-scroll data-scroll-delay="0.06" data-scroll-speed="8">
                t
              </span>
              <span data-scroll data-scroll-delay="0.07" data-scroll-speed="8">
                t
              </span>
              <span data-scroll data-scroll-delay="0.08" data-scroll-speed="8">
                e
              </span>
              <span data-scroll data-scroll-delay="0.09" data-scroll-speed="8">
                r
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const fixedContainer = () => {
    return (
      <div  id="fixed-container" className="grid grid-cols-2  w-full relative">
      <div data-scroll  className="flex flex-col items-center justify-center">
        <p data-scroll data-scroll-delay="0.2" data-scroll-speed="12" data-scroll-repeat className="text-4xl" >Fixed element</p>
      </div>
      <div id="fixed-wrapper" className="flex h-[100vh] relative overflow-hidden">
        <div className="fixed_target" id="fixed-target"/>
        <div data-scroll data-scroll-sticky data-scroll-target="#fixed-target" className="img-fixed"/>
      </div>
    </div>
    )
  
  };

  return (
    < >
     <Section
      className="flex flex-col"
      id="playground-section"
      data-scroll-section
    >
      {horizontalScrollContainer()}
      {lerbScrollContainer()}
     
    </Section>
    <Section className="flex flex-col" data-scroll-section id="fixed-section">
      {fixedContainer()}
    </Section>
    </>
   
  );
};

export default Playground;

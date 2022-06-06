import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Section from "./styled";
import useOnScreen from "src/hooks/useOnScreen";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";

import cn from "classnames";
const FlipPlayground = () => {
  const sectionRef = useRef();
  const boxContainerRef = useRef();

  const [isRow, setIsRow] = useState(false);
  const [layout, setLayout] = useState(null);

  useLayoutEffect(() => {
    console.log("height sectionRef: ", sectionRef.current.offsetHeight);
    console.log("width sectionRef: ", sectionRef.current.offsetWidth);

    const tl = gsap.timeline();
   
    setTimeout(() => {
      tl.fromTo(
        ".box",
        {
          y: -30,
          x: 15,
        },
        {
          delay: 0.5,
          duration: 1,
          opacity: 1,
          y: 0,
          x: 0,
          stagger: 0.1,
        }
      );

      // let sections = gsap.utils.toArray(".box");
      tl.to(
      '.box',
        {
          // yPercent: -100 * (sections.length - 1),
          scrollTrigger: {
            markers: true,
            start: "top top",
            trigger: sectionRef.current,
            scroller: "#main-container",
            pin: true,
            end: () => `+=${sectionRef.current.offsetHeight}`,
            onEnter: () => {
              const boxes = gsap.utils.toArray(".box");
 
              setLayout(Flip.getState(boxes));
              setIsRow(true);
            
            },
          },
        }
      );
      ScrollTrigger.refresh();
    }, []);
  }, []);

  useLayoutEffect(() => {
    if (!layout) return;

    if (layout) {
      console.log("layout state: ", layout);
      Flip.from(layout, {
        scale: true,
        delay: 0.5, //must have delay!!!! first animation mst be finished
        absolute: true,
        stagger: 0.1,
        duration: 1,
        spin: -1,
        ease: "power4.inOut",
      });
    }
  }, [layout]);

  const handleOnClick = () => {
    const boxes = gsap.utils.toArray(".box");
    
    setLayout(Flip.getState(boxes));
    setIsRow(true);
    
  };

  return (
    <Section id="flip-section" className="relative pt-4" data-scroll-section>
      <div className="absolute top-0 left-0 ">
        <button onClick={handleOnClick} className="bg-white rounded-md">
          Flip
        </button>
      </div>

      <div
        id="wrapper"
        ref={sectionRef}
        className="flex items-center justify-center container mx-auto h-[100vh] "
      >
        <div
          ref={boxContainerRef}
          className={`box-container justify-center items-center ${cn({
            "is-row": isRow,
          })}`}
        >
          <div key={1} className="box">
            A
          </div>
          <div key={2} className="box">
            B
          </div>
          <div key={3} className="box">
            C
          </div>
          <div key={4} className="box">
            D
          </div>
          <div key={5} className="box">
            E
          </div>
          <div key={6} className="box">
            F
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FlipPlayground;

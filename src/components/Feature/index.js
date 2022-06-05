import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Section from "./styled";
import cn from "classnames";
import useOnScreen from "../../hooks/useOnScreen";
import Flip from "gsap/Flip";

const items = [
  {
    src: "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
    title: "Golden Pothos",
    description: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
    title: "Calliope",
    description: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
];
const RenderImages = ({ active }) => {
  return items.map(({ src }, index) => (
    <img
      className={`${cn({ primary: active === index })}`}
      key={src}
      style={{ backgroundImage: `url(${src})` }}
    />
  ));
};

const FeatureSlide = ({
  src,
  id,
  title,
  description,
  index,
  setActiveIndex,
}) => {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      console.log("index: ", index);
      setActiveIndex(index);
    }
  }, [onScreen, index]);

  return (
    <div className="feature-slide" key={src} ref={ref}>
      <div className="feature-slide-title">{title}</div>
      <div className="feature-slide-description">{description}</div>
    </div>
  );
};

const FeatureSlides = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCol, setIsCol] = useState(false);
  const featureRef = useRef(null);
  const featureRightRef = useRef(null);
  const featureLeftRef = useRef(null);
  const [state, setState] = useState(null);
  const [isStateSaved, setIsStateSaved] = useState(false);
  const onScreen = useOnScreen(featureLeftRef, 0.5);

  useLayoutEffect(() => {
    if (onScreen) {
      setIsCol(onScreen);
    }
  }, [onScreen]);

 

 
  useLayoutEffect(() => {
  
    if(isCol) {
      setTimeout(() => {

        gsap.to(".feature-slides-right", {
          ease: "power4.out",
          scrollTrigger: {
            markers: true,
            start: "top top",
            trigger: featureRightRef.current,
            scroller: "#main-container",
            pin: true,
            end: () => "+=" + featureRef.current.offsetHeight,
            onEnter: () => console.log("enter"),
          },
         
        });
        ScrollTrigger.refresh();
      });
    }
   
  }, [isCol]);




  return (
    <div
      ref={featureRef}
      className={`feature-slides grid grid-cols-2`}
    >
      <div ref={featureLeftRef} className="feature-slides-left">
        {items.map((item, index) => (
          <FeatureSlide
            {...item}
            index={index}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
      <div className="feature-slides-right" ref={featureRightRef}>
        <RenderImages active={activeIndex} />
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <Section data-scroll-section>
      <FeatureSlides />
    </Section>
  );
};

export default Feature;

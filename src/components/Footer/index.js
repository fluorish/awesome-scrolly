import Section from "./styled";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import SplitText from "src/utils/Split3.min";
import useOnScreen from "src/hooks/useOnScreen";
import cn from "classnames";

const Footer = () => {
  const ref = useRef(null);


  return (
    <Section
      id="footer-section"
      data-scroll-section
    >
      <div className="flex justify-center items-center min-h-screen">
        <div ref={ref} >Footer</div>
        {/* <p>Test</p> */}
      </div>
    </Section>
  );
};

export default Footer;

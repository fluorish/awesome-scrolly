import Section from "./styled";
import React, { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";
import SplitText from "src/utils/Split3.min";
import useOnScreen from "src/hooks/useOnScreen";
import cn from "classnames";
import ScrollTrigger from "gsap/ScrollTrigger";

const About = () => {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if(onScreen) {
      setReveal(onScreen)

    }
  }, [onScreen]);

  useEffect(() => {
  
    
    if (reveal) {
    
      const split = new SplitText("#headline", {
        type: "lines,words,chars",
        linesClass: "split-line",
      });
      gsap.to(split.lines, {
        duration: 1,
        ease: "power2.out",
        opacity: 1,
        stagger: 0.1,
        y: -30,
      })
    } 
  }, [reveal]);

  return (
    <Section id="about-section" className={`about-section`} data-scroll-section>
      <div className="container">
        <p id="headline" ref={ref} className={cn({ "is-reveal": reveal })}>
          Flirty Flowers is a blog about flowers and the floral designers who
          make them into art. Creativity and the art of making require dialogue.
          The full purpose of the Flirty Flowers blog is to encourage and
          inspire. We value art, we value insight, and we value opinion. Flirty
          Flowers is a blog about flowers and the floral designers who make them
          into art.
        </p>
      </div>

      {/* <p>Test</p> */}
    </Section>
  );
};

export default About;

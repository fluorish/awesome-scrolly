import Section from "./styled";
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import gsap from "gsap";
import SplitText from "src/utils/Split3.min";
import useOnScreen from "src/hooks/useOnScreen";
import cn from "classnames";
import ScrollTrigger from "gsap/ScrollTrigger";

const Playground = () => {
  const videoRef = useRef(null);
  const videoSectionRef = useRef(null);
  const [duration, setDuration] = useState(0);

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
      <div id="fixed-container" className="grid grid-cols-2  w-full relative">
        <div data-scroll className="flex flex-col items-center justify-center">
          <p
            data-scroll
            data-scroll-delay="0.2"
            data-scroll-speed="12"
            data-scroll-repeat
            className="text-4xl"
          >
            Fixed element
          </p>
        </div>
        <div
          id="fixed-wrapper"
          className="flex h-[100vh] relative overflow-hidden"
        >
          <div className="fixed_target" id="fixed-target" />
          <div
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed-target"
            className="img-fixed"
          />
        </div>
      </div>
    );
  };

  const RenderVideo = ({ children }) => {
    const handleOnLoadedMetadata = (val) => {
      console.log("metadata: ", val);
      console.log("videoRef: ", videoRef);
      if (!videoRef.current) return;

      setDuration(videoRef.current.duration);
    };

    return (
      <video
        ref={videoRef}
        className={"w-full h-full object-cover"}
        playsInline={true}
        preload="auto"
        muted="muted"
        onLoadedMetadata={handleOnLoadedMetadata}
      >
        {children}
      </video>
    );
  };

  useEffect(() => {
    setTimeout(() => {
     
      // let tl = gsap.timeline({
      //   scrollTrigger: {
      //     markers: true,
      //     start: "top top",
      //     trigger: videoSectionRef.current,
      //     end:  () => "+=" + videoSectionRef.current.offsetHeight,
      //     scrub: true,
      //     onEnter: () => console.log('scrub start'),
      //     onUpdate: (val) => {
      //       if (videoRef.current) {
      //         let scrollPos = val.progress;
      //         console.log('progress: ', scrollPos)
      //         let videoDuration = videoRef.current.duration;
      //         let videoCurrentTime = videoDuration * scrollPos;

      //         console.log("videoCurrentTime: ", videoCurrentTime);
      //         if (videoCurrentTime) {
      //           videoRef.current.currentTime = videoCurrentTime;
      //         }

      //         // console.log(videoDuration, scrollPos, videoCurrentTime)
      //       }
      //     },
      //   },
      // });

      gsap.to(".video-wrapper", {
        scrollTrigger: {
          immediateRender: false,
          // markers: true,
          trigger: '.video-section',
          start: "top top",
          end: () => "+=" + videoSectionRef.current.offsetHeight,
          scroller: "#main-container",
          pin: true,
          scrub: true,
          onEnter: () => console.log("pin start"),
          onUpdate: (val) => {
            if (videoRef.current) {
              let scrollPos = val.progress;
              console.log('progress: ', scrollPos)
              let videoDuration = videoRef.current.duration;
              let videoCurrentTime = videoDuration * scrollPos;

              console.log("videoCurrentTime: ", videoCurrentTime);
              if (videoCurrentTime) {
                videoRef.current.currentTime = videoCurrentTime;
              }

              // console.log(videoDuration, scrollPos, videoCurrentTime)
            }
        },
      }
      });
      ScrollTrigger.refresh();
    }, []);
  }, []);

  useEffect(() => {
    if (!duration) return;

    console.log("duration: ", duration);
    console.log("videoRef.current: ", videoRef.current);
    gsap.fromTo(
      videoRef.current,
      {
        currentTime: 0,
      },
      {
        currentTime: duration,
      }
    );
  }, [duration]);

  const heroContainer = () => {
    return (
      <>
        <section className="video-section" ref={videoSectionRef}>
          <RenderVideo className="video-wrapper">
            <source
              src="https://www.dropbox.com/s/ob3iz14tgo29qns/Abstract%20-%2020072_960.mp4?raw=1"
              type="video/mp4"
            />
          </RenderVideo>
        </section>
        <section className="hero-section h-[100vh] z-2">
          <div className="container flex justify-center">
          <p className="text-4xl text-white uppercase ">Hellooooooooo</p>
          </div>
        
        </section>
      </>
    );
  };

  return (
    <>
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
      <Section id="hero-section" className="flex flex-col" data-scroll-section>
        {heroContainer()}
      </Section>
    </>
  );
};

export default Playground;

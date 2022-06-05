import React, { useState, useRef, useEffect } from "react";
import About from "components/About";
import Footer from "components/Footer";
import useLocoScroll from "hooks/useLocoScroll";
import Gallery from "components/Gallery";
import Feature from "../../components/Feature";
import "styles/global.scss";
import Container from "./styled";
import Playground from "../../components/Playground";
const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);

  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(3);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };



  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);

    return () => clear();

  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }


  const preloaderContainer = () => {
    console.log('preloader render')
    return (
      
        <div className="loader-wrapper  fixed top-0 left-0 bottom-0 right-0 bg-black z-1">
          <h1>Created by</h1>
          <h2>Skadoosh</h2>
        </div>
   
    );
  };

  const mainContainer = () => {
    console.log('main render')

    return (
      <Container
        id="main-container"
        className="relative overflow-hidden"
        data-scroll-container
        ref={ref}
      >
        {/* <First /> */}
        <Playground/>
        <About />
        <Gallery />
        <Feature />
      
        <Footer />
      </Container>
    );
  };

  return (
    < >
        { preloader ? preloaderContainer() : mainContainer()}
    </>
  );
};
export default Home;

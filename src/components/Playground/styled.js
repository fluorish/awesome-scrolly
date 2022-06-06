import styled from "styled-components";

const Section = styled.section`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  min-height: 100vh;

  .video-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    width: 100vw;
    height: 100vh;

  
  }

  .block-item {
    display: flex;
    /* position: absolute; */
      span {
          background-color: white;
          padding: 0 20px;
          white-space: nowrap;
          font-size: 6vw;
      }

     
  }

  .title {
    display: flex;
    span {
      display: inline-block;
    }

  }

  .one { 
    span {
      transform: skewY(4deg) rotate(4deg);

    }
     
  }

  .two {
    span{ 
      transform: skew(8deg) rotate(6deg);

    }
     
  }

  .three {
    span {
      transform: skewY(8deg) rotate(2deg);

    }
     
  }

  .four {
    span {
      transform: skew(1deg) rotate(4deg);

    }
     
  }

  .fixed_target {
  position: absolute;
  bottom: -100vh;
  top: -100vh;
  left: 0;
  right: 0;
}
  .img-fixed {
    position: absolute;
    left: 0;
    right: 0;
    top: -100vh;

    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
    opacity: 0.75;
    background-size: cover;
    background-position: 100%;
    background-image: url('https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100');
  }
  
`;

export default Section;

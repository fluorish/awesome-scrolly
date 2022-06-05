import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .container {
    display: flex;
    flex-direction: column;
  }


  .feature-slides-row {
    display: grid;
    grid-template-rows: 1fr;
    text-align: center;
  }

  .feature-slides-left {
    padding: 0 1rem;

    .feature-slide {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;

      .feature-slide-title {
        font-size: 6vw;
        text-transform: uppercase;
      }

      .feature-slide-description {
        font-size: 1rems;
        margin-top: 30px;
      }
    }
  }

  .feature-slides-right {
    height: 100vh;
    overflow: hidden;
    position: relative;
    width: 100%;
    
    img {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0;
      transition: all 1s ease-in-out;
      transform: scale(1.3);
      position: absolute;
      top: 0;

      &.primary {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;

export default Section;

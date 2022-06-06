import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  min-height: 100vh;
  width: 100%;

  .box-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-content: center;
    align-content: center;
    gap: 1rem;
  }

  .is-row {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
    gap: 10rem;
  }

  .box {
   
    font-size: 2vw;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;

export default Section;

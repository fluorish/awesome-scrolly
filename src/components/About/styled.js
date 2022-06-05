import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .container {
    padding: 1rem;
    display:  flex;
    justify-content: center;
    align-items: center;
  }
  #headline {
    text-align: center;
    font-size: 32px;
    line-height: 1.12;
    opacity: 0;

    > div {
      opacity: 0;
      transform: translateY(0px);
    } 

    &.is-reveal {
      opacity: 1;
    }
  }
`;

export default Section;

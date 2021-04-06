import React from "react";
import styled from "styled-components";
import Img from "../../images/banners/banner6.jpeg";
//import { LgText } from "../../constants/style";

const Container = styled.div`
  background-image: url(${Img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 1fr;
 justify-content: center;
  align-content: center;
`;

// const Text = styled.h2`
//  font-size: 5rem;
//  color: white;
// `;

const Slide3 = () => {
  return (
    <Container>
      <Content>
       
      </Content>
    </Container>
  );
};

export default Slide3;

import React from 'react';
import styled from 'styled-components';
import loaderSrc from '../assets/images/loader_yellow.gif';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
`;

const Image = styled.img`
  width: 70px;
`;

const BlinkingText = styled.p`
  margin: 20px 0 0 0;
  font: 13px "Open Sans Bold", sans-serif;
  font-weight: 600;
  color: #b5b5b7;
  text-transform: uppercase;
  animation: blinker 1s linear infinite;
`;

const AppLoader = () => (
  <Container>
    <Image src={loaderSrc} alt="loader" />
    <BlinkingText>chargement de l'application</BlinkingText>
  </Container>
);

export default AppLoader;

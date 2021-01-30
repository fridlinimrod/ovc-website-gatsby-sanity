import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const LayoutStyles = styled.div`
  display: grid;
  grid-template-rows: 4vh minmax(200px, 90vh) 1fr;
  nav ~ div {
    overflow: auto;
    margin: 0 auto;
    width: 80%;
    margin-top: 10px;
    padding: 0 15px;
  }
`;
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <LayoutStyles>
        <Nav />
        {children}
        <Footer />
      </LayoutStyles>
    </>
  );
}

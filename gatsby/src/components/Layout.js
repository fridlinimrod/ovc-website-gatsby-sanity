import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import MobileNav from './MobileNav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const LayoutStyles = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 4vh minmax(200px, 90vh) 1fr;
  nav ~ div {
    overflow: auto;
    margin: 0 auto;
    width: 80%;
    margin-top: 10px;
    padding: 0 15px;
  }
  footer,
  nav {
    background: var(--ovc-secondary-color);
  }
`;
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <LayoutStyles>
        <Nav />
        <MobileNav />
        {children}
        <Footer />
      </LayoutStyles>
    </>
  );
}

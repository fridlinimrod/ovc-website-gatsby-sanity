import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import MobileNav from './MobileNav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const LayoutStyles = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 4vh minmax(200px, 90vh) 1fr;
  @media (max-width: 800px) {
    grid-template-rows: 32px minmax(200px, 85vh) 1fr;
  }
  nav ~ div {
    overflow: auto;
    margin-top: 10px;
    padding: 0 15px;
    & > div {
      margin: 0 auto;
      width: 80%;
    }
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
        <div>{children}</div>
        <Footer />
      </LayoutStyles>
    </>
  );
}

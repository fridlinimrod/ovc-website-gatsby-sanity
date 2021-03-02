import React from 'react';
import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/OrderContext';

export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script async src="https://c6.patreon.com/becomePatronButton.bundle.js" />,
  ]);
};
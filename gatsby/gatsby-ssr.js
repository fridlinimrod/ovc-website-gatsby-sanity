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
    <meta property="og:title" content="Control Videos like a boss!" />,
    <meta
      property="og:description"
      content="OVC - One Video Control, a chrome extension that helps you control all the videos you are watching online!"
    />,
  ]);
};

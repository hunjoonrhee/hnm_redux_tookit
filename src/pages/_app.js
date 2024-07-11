// pages/_app.js
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { wrapper } from '../store';
import '../style/login.style.css';
function MayDay({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>May Day</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MayDay.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MayDay);

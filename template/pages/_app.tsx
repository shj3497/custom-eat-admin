import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { RecoilRoot } from "recoil";

interface MyAppProps extends AppProps {}

const MyApp = (props: MyAppProps) => {
  const { Component, pageProps } = props;
  return (
    <RecoilRoot>
      <Head>
        <title>Project</title>
      </Head>

      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;

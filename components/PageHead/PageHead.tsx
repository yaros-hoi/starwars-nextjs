import * as React from 'react';
import Head from 'next/head';

interface Props {
  children: React.ReactNode;
}

const PageHead = ({ children }: Props) => (
  <Head>
    {children}
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <link rel="manifest" href="/static/manifest.json" />
    <link rel="icon" sizes="192x192" href="/static/logo.png" />
    <link rel="apple-touch-icon" href="/static/logo.png" />
    <meta name="theme-color" content="#b71c1c" />
  </Head>
);

export default PageHead;

import 'bootstrap/dist/css/bootstrap.css';
import "devicon/devicon.css";
import "./scss/resume.scss";

import type { AppProps } from 'next/app'
import Layout from './components/Layout';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Jake Daryl Moresca</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
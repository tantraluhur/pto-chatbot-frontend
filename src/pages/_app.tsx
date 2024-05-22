import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from "next/app";
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ToastContainer } from "react-toastify";
import { Nunito } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import Head from "next/head";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"]
});

const theme = createTheme({
  typography: {
    fontFamily: nunito.style.fontFamily,
  },
});


export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>
      <Head>
        <title>
          PTO Chatbot
        </title>
      </Head>
      <ThemeProvider theme={theme}>
        <SessionProvider>
          <main className={nunito.className}>
            <Component {...pageProps} />
          </main>
        </SessionProvider>
        <ToastContainer autoClose={1000} position="top-center" />
      </ThemeProvider>
    </AppCacheProvider>
  );
}

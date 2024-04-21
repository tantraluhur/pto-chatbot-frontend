import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Lato, Roboto } from 'next/font/google';
import Head from "next/head";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"]
});

const theme = createTheme({
  typography: {
    fontFamily: lato.style.fontFamily,
  },
});


export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>
      <Head>...</Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}

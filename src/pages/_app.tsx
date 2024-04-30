import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Lato, Nunito, Roboto } from 'next/font/google';
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
      <Head>...</Head>
      <ThemeProvider theme={theme}>
        <main className={nunito.className}>
          <Component {...pageProps} />

        </main>
      </ThemeProvider>
    </AppCacheProvider>
  );
}

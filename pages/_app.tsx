import '../styles/globals.css';
import createEmotionCache from '@/lib/theme/createEmotionCache';
import theme from '@/lib/theme/theme';
import {CacheProvider, EmotionCache} from '@emotion/react';
import {CssBaseline, StyledEngineProvider, ThemeProvider} from '@mui/material';
import App, {AppProps} from 'next/app';
import Head from 'next/head';
import {useEffect, useState} from 'react';
import FontStyle from '@/components/_atoms/FontStyle';
import {QueryClient, QueryClientProvider} from 'react-query';
import {RecoilRoot} from 'recoil';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: MyAppProps) => {
  const {Component, pageProps, emotionCache = clientSideEmotionCache} = props;
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <RecoilRoot>
      <CacheProvider value={emotionCache}>
        <StyledEngineProvider injectFirst>
          <Head>
            <title>Title</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, minimum-scale=1, initial-scale=1, maximum-scale=1, user-scalable=no"
            />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
          </Head>

          <FontStyle />

          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </QueryClientProvider>
        </StyledEngineProvider>
      </CacheProvider>
    </RecoilRoot>
  );
};

export default MyApp;

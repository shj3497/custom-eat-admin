import '../styles/global.css';
import createEmotionCache from '@/lib/theme/createEmotionCache';
import theme from '@/lib/theme/theme';
import {CacheProvider, EmotionCache} from '@emotion/react';
import {CssBaseline, StyledEngineProvider, ThemeProvider} from '@mui/material';
import App, {AppContext, AppProps} from 'next/app';
import Head from 'next/head';
import {useEffect, useState} from 'react';
import {RecoilRoot} from 'recoil';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import axios from 'axios';

axios.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error);
  },
);

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
          </Head>

          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>

            <ReactQueryDevtools />
          </QueryClientProvider>
        </StyledEngineProvider>
      </CacheProvider>
    </RecoilRoot>
  );
};

export default MyApp;

MyApp.getServerSideProps = async (context: AppContext) => {
  const appProps = App.getInitialProps(context);
  return {
    ...appProps,
  };
};

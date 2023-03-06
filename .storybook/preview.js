import '../styles/global.css';
import * as nextImage from 'next/image';
import {RouterContext} from 'next/dist/shared/lib/router-context';
import {RecoilRoot} from 'recoil';
import {StyledEngineProvider, ThemeProvider} from '@mui/material/styles';
import {QueryClient, QueryClientProvider} from 'react-query';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/lib/theme/theme';
import {setConfig} from 'next/config';
import {publicRuntimeConfig} from '../next.config';

setConfig({
  publicRuntimeConfig,
});

/*
 * Fix next/image component issue.
 * */
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} alt="" />,
});

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

const queryClient = new QueryClient();

export const decorators = [
  (Story, context) => (
    <RecoilRoot>
      <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Story {...context} />
            </div>
          </ThemeProvider>
        </QueryClientProvider>
      </StyledEngineProvider>
    </RecoilRoot>
  ),
];

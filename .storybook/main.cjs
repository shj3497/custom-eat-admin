const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);
const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    // components로 경로 변경
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
  ],

  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  babel: (config) => {
    // To support Emotion css prop, change preset-react option.
    const presetReactIdx = config.presets.findIndex(
      (x) => Array.isArray(x) && x[0].includes('preset-react'),
    );
    config.presets[presetReactIdx][1] = {
      runtime: 'automatic',
      importSource: '@emotion/react',
    };
    return config;
  },
  webpackFinal: async (config) => {
    const tsconfigPathsPlugin = new TsconfigPathsPlugin({});
    return {
      ...config,
      resolve: {
        ...config.resolve,
        plugins: config.resolve.plugins
          ? [...config.resolve.plugins, tsconfigPathsPlugin]
          : [tsconfigPathsPlugin],
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};

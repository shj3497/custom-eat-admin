import type { Preview } from "@storybook/react";

const customViewPorts = {
  pc: {
    name: "PC",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
  ipadpro: {
    name: "iPadPro",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },
  iphone14pro: {
    name: "iPhone 14 Pro",
    styles: {
      width: "393px",
      height: "852px",
    },
  },
  iphone12mini: {
    name: "iPhone 12 Mini",
    styles: {
      width: "360px",
      height: "780px",
    },
  },
  galaxys22ultra: {
    name: "Galaxy S22 Ultra",
    styles: {
      width: "360px",
      height: "772px",
    },
  },
  galaxyzfold2: {
    name: "Galaxy Z Fold2",
    styles: {
      width: "884px",
      height: "1104px",
    },
  },
  galaxyzflip: {
    name: "Galaxy Z Flip",
    styles: {
      width: "412px",
      height: "1004px",
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "fullscreen",
    viewport: {
      viewports: customViewPorts,
    },
  },
};

export default preview;

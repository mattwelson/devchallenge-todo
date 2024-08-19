import React from "react";
import type { Preview } from "@storybook/react";

import { fontSans } from "../src/app/layout";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
  },
  decorators: (Story) => (
    <div className={`font-sans ${fontSans.variable}`}>
      <Story />
    </div>
  ),
};

export default preview;

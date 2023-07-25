import type { Meta, StoryObj } from "@storybook/react";
import ThemeProvider from "@src/theme/ThemeProvider";

import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  // tags: ["autodocs"],
  args: {
    children: "Texto de Exemplo",
    tag: "p",
    variant: "body2",
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Example: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

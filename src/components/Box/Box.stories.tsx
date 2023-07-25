import { Meta, StoryObj } from "@storybook/react";
import Box from "./Box";
import Text from "../Text/Text";
import ThemeProvider from "@src/theme/ThemeProvider";

const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Example: Story = {
  args: {
    tag: "section",
    children: <Text children="Texto do Box" />,
    styleSheet: {
      textAlign: "center",
      padding: "10px",
    },
  },
};

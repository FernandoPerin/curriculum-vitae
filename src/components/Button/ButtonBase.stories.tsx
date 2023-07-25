import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import ButtonBase from "./ButtonBase";
import ThemeProvider from "@src/theme/ThemeProvider";

const meta: Meta<typeof ButtonBase> = {
  title: "Components/ButtonBase",
  component: ButtonBase,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ButtonBase>;

export const Primary: Story = {
  args: {
    children: "Botão Primary",
    textVariant: "body1",
    href: "/",
  },
};

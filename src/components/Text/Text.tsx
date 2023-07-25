import React from "react";
import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";

interface TextProps {
  variant?: ThemeTypographyVariants;
  tag?: "a" | "p" | "li" | "h1" | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

const Text = React.forwardRef(
  ({ tag, variant, styleSheet, ...props }: TextProps, ref) => {
    const theme = useTheme();
    const textVariant = theme.typography.variants[variant];

    return (
      <BaseComponent
        as={tag}
        styleSheet={{
          fontFamily: theme.typography.fontFamily,
          ...textVariant,
          ...styleSheet,
        }}
        ref={ref}
        {...props}
      />
    );
  }
);

Text.defaultProps = {
  tag: "p",
  variant: "body2",
};

export default Text;

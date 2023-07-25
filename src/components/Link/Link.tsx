import React from "react";
import Text from "../Text/Text";
import Link from "next/link";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";

interface LinkProps {
  href: string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?:
    | "primary"
    | "accent"
    | "neutral"
    | "success"
    | "warning"
    | "negative";
  colorVariantEnabled?: boolean;
  target?: string;
}

const LinkText = React.forwardRef(
  (
    {
      href,
      target,
      children,
      styleSheet,
      variant,
      colorVariant,
      colorVariantEnabled,
      ...props
    }: LinkProps,
    ref
  ) => {
    const theme = useTheme();
    const currentColorSet = {
      color: theme.colors[colorVariant].x500,
      hover: {
        color: theme.colors[colorVariant].x400,
      },
      focus: {
        color: theme.colors[colorVariant].x600,
      },
    };

    const linkProps = {
      tag: "span",
      ref,
      children,
      styleSheet: {
        textDecoration: "none",
        ...(colorVariantEnabled && {
          color: currentColorSet.color,
        }),
        ...styleSheet,
        hover: {
          ...styleSheet?.hover,
          ...(colorVariantEnabled && {
            color: currentColorSet.hover.color,
          }),
        },
        focus: {
          ...styleSheet?.focus,
          ...(colorVariantEnabled && {
            color: currentColorSet.focus.color,
          }),
        },
      },
      ...props,
    };

    return (
      <Link href={href} target={target} passHref>
        <Text {...linkProps} />
      </Link>
    );
  }
);

LinkText.defaultProps = {
  colorVariant: "primary",
  colorVariantEnabled: true,
};

export default LinkText;

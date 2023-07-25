import React from "react";
import styled from "styled-components";
import { StyleSheet } from "@src/theme/StyleSheet";
import { parseStyleSheet } from "@displaykit/responsive_styles";

interface StyledBaseComponentProps {
  styleSheet?: StyleSheet;
  ref: any;
}

const StyledBaseComponent = styled.div<StyledBaseComponentProps>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

interface BaseComponentProps {
  [key: string]: any;
  styleSheet: StyleSheet;
}
export const BaseComponent = React.forwardRef<unknown, BaseComponentProps>(
  (props, ref) => {
    return <StyledBaseComponent ref={ref} {...props} />;
  }
);

BaseComponent.defaultProps = {
  styleSheet: {},
};

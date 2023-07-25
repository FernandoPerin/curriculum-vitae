import { StyleSheet } from "@src/theme/StyleSheet";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";
import Box from "../Box/Box";
import Text from "../Text/Text";
import Button from "../Button/Button";

interface ModalProps {
  styleSheet?: StyleSheet;
}
export default function Modal({ styleSheet }: ModalProps) {
  const theme = useTheme();
  return (
    <>
      <Box
        styleSheet={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          backgroundColor: theme.colors.neutral.x999,
          opacity: "0.5",
          zIndex: 10,
        }}
      ></Box>
      <Box
        styleSheet={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          paddingVertical: "30px",
          backgroundColor: theme.colors.neutral.x000,
          borderRadius: "8px",
          zIndex: 100,
          width: "600px",
          ...styleSheet,
        }}
      >
        <Text
          styleSheet={{
            textAlign: "center",
          }}
          tag="h2"
          variant="heading3"
        >
          Login
        </Text>
        <Box>
          <Text>Usuário</Text>
          <input />
          <Text>Senha</Text>
          <input />
          <Button>Entrar</Button>
        </Box>
      </Box>
    </>
  );
}

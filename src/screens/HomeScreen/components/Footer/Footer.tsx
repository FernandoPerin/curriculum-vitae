import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x900,
        color: theme.colors.neutral.x000,
        width: "100%",
        height: "120px",
        alignItems: "center",
        justifyContent: "center",
        paddinghorizontal: "24px",
        paddingVertical: "24px",
        textAlign: "center",
      }}
    >
      <Text variant="body2">Feito com ❤️️ por Fernando Perin</Text>
    </Box>
  );
}
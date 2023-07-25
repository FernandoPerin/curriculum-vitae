import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Menu() {
  const theme = useTheme();
  //Adicionar verificação de Token e User Logado
  const user = true;

  const handleLogin = () => {
    console.log("Logando");
  };

  return (
    <Box
      styleSheet={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingVertical: "16px",
        paddingHorizontal: "20px",
        width: "100%",
        color: theme.colors.neutral.x000,
      }}
    >
      {/* {user ? (
        <Button
          fullWidth
          variant="contained"
          colorVariant="primary"
          size="xl"
          styleSheet={{
            fontWeight: 700,
          }}
          onClick={handleLogin}
        >
          Log in
        </Button>
      ) : (
        <Button.Base
          styleSheet={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "100%",
            backgroundColor: theme.colors.neutral.x999,
            width: "50px",
            height: "50px",
            hover: {
              backgroundColor: theme.colors.neutral.x800,
            },
          }}
        >
          <Icon size="xl" name="user" />
        </Button.Base>
      )} */}
    </Box>
  );
}

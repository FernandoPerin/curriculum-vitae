import Box from "@src/components/Box/Box";
import LinkText from "@src/components/Link/Link";
import Modal from "@src/components/Modal/Modal";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import { useState } from "react";
import Background from "./components/Background/Background";
import Feed from "./components/Feed/Feed";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import templatePageHOC from "@src/services/template/templatePageHOC";
import type { Post } from "@src/services/posts/PostService";

interface HomeScreenProps {
  posts: Post[];
}

function HomeScreen({ posts }: HomeScreenProps) {
  const theme = useTheme();
  const [modal, setModal] = useState(false);

  return (
    <>
      <Box
        tag="main"
        styleSheet={{
          backgroundColor: theme.colors.neutral.x000,
          flex: 1,
          alignItems: "center",
        }}
      >
        {modal && <Modal></Modal>}
        <Background />
        <Menu />
        <Feed>
          <Feed.Header />
          <Feed.Posts posts={posts} />
        </Feed>
        <Footer />
      </Box>
    </>
  );
}

export default templatePageHOC(HomeScreen, {
  title: "Home",
});

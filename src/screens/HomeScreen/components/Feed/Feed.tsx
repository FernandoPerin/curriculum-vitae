import React from "react";
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import { useTheme } from "@src/theme/ThemeProvider";
import foto from "@src/images/foto-fernando.jpeg";
import LinkText from "@src/components/Link/Link";
import type { Post } from "@src/services/posts/PostService";
import { FeedPost } from "./components/FeedPost";

interface FeedProps {
  children?: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: "-230px",
        width: "100%",
        maxWidth: "680px",
        borderRadius: "8px",
        paddingVertical: "40px",
        paddingHorizontal: "30px",
      }}
    >
      {children}
    </Box>
  );
}

Feed.Header = () => {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        marginBottom: "24px",
      }}
    >
      <Box
        styleSheet={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: { xs: "center" },
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <Image
          styleSheet={{
            width: { xs: "100px", md: "128px" },
            height: { xs: "100px", md: "128px" },
            borderRadius: "100%",
          }}
          src={foto.src}
          alt="Imagem de Perfil do Fernando Perin"
        />
        <Box
          styleSheet={{
            alignItems: { xs: "center", md: "flex-end" },
          }}
        >
          <Text variant="heading4">Front End Developer</Text>
          <Text variant="body3">24 years old</Text>
          <Text variant="body3">(41) 99280-0049</Text>
          <Text variant="body3">Rua Antônio Meirelles Sobrinho, 951</Text>
        </Box>
      </Box>
      <Text
        styleSheet={{
          textAlign: { xs: "center", md: "left" },
        }}
        tag="h1"
        variant="heading4"
      >
        Fernando Augusto Perin Junior
      </Text>
      <Box
        styleSheet={{
          flexDirection: "row",
          alignItem: "center",
          justifyContent: { xs: "center", md: "flex-start" },
          gap: "8px",
          paddingVertical: "20px",
        }}
      >
        <LinkText
          href="https://www.instagram.com/"
          target="_blank"
          colorVariant="primary"
        >
          <Icon name="instagram" />
        </LinkText>
        <LinkText
          href="https://github.com/FernandoPerin"
          target="_blank"
          colorVariant="primary"
        >
          <Icon name="github" />
        </LinkText>
        <LinkText
          href="https://www.linkedin.com/in/fernando-perin-jr/"
          target="_blank"
          colorVariant="primary"
        >
          <Icon name="linkedin" />
        </LinkText>
      </Box>
    </Box>
  );
};

interface FeedPostProps {
  posts: Post[];
}

Feed.Posts = ({ posts }: FeedPostProps) => {
  return (
    <Box>
      <Text variant="heading4" styleSheet={{ marginBottom: "27px" }}>
        Últimas Atualizações
      </Text>
      {posts.map(
        ({ startDate, endDate, role, abstract, company, tecnology }) => {
          return (
            <FeedPost
              key={startDate}
              startDate={startDate}
              endDate={endDate}
              role={role}
              abstract={abstract}
              tecnology={tecnology}
              company={company}
            />
          );
        }
      )}
    </Box>
  );
};

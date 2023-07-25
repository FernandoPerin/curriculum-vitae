import Box from "@src/components/Box/Box";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

interface FeedPostProps {
  startDate: string;
  endDate?: string;
  role: string;
  abstract: string;
  tecnology: string[];
  company: string;
}
export function FeedPost({
  startDate,
  endDate,
  role,
  abstract,
  company,
  tecnology,
}: FeedPostProps) {
  const theme = useTheme();
  const postStartDate = new Date(startDate)
    .toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    .replace(".", "")
    .replace(/de /g, "");
  const postEndDate = endDate
    ? new Date(endDate)
        .toLocaleDateString("pt-BR", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
        .replace(".", "")
        .replace(/de /g, "")
    : "Atual Momento";

  return (
    <Box
      styleSheet={{
        position: "relative",
        paddingBottom: "35px",
      }}
    >
      <FeedPostSideTimeline />
      <Text
        variant="body4"
        styleSheet={{
          fontWeight: "bold",
          marginBottom: "25px",
          marginLeft: "5px",
        }}
      >
        {postStartDate} - {postEndDate}
      </Text>

      <Text
        styleSheet={{
          marginBottom: "10px",
          fontStyle: "italic",
        }}
        variant="heading4"
      >
        {role} - {company}
      </Text>

      <Text
        variant="body3"
        styleSheet={{
          marginBottom: "20px",
        }}
      >
        {abstract}
      </Text>

      {/* Tags */}
      <Box
        styleSheet={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "4px",
        }}
      >
        {tecnology &&
          tecnology?.map((tecnology) => (
            <Text
              key={tecnology}
              variant="body4"
              styleSheet={{
                color: theme.colors.neutral.x000,
                backgroundColor: theme.colors.primary.x600,
                cursor: "default",
                borderRadius: "1000px",
                padding: "5px 12px",
              }}
            >
              {tecnology}
            </Text>
          ))}
      </Box>
    </Box>
  );
}

function FeedPostSideTimeline() {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        position: "absolute",
        top: 0,
        bottom: 0,
        color: theme.colors.neutral.x200,
        marginLeft: "-16px",
      }}
    >
      <Icon
        name="clock_fill"
        styleSheet={{
          transform: {
            xs: "translateX(-50%) scale(.9)",
            sm: "translateX(-50%)",
          },
          position: "absolute",
          top: "0",
          left: "0",
        }}
      />
      <Box
        styleSheet={{
          top: "16px",
          bottom: "0",
          margin: "auto",
          position: "absolute",
          width: "1px",
          backgroundColor: "currentColor",
        }}
      />
    </Box>
  );
}

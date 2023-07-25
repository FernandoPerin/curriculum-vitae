import PostService from "@src/services/posts/PostService";
import { withTemplateConfig } from "@src/services/template/withTemplateConfig";
export { default } from "@src/screens/HomeScreen/HomeScreen";

export async function getStaticProps() {
  const posts = await PostService().getAll();

  return {
    props: await withTemplateConfig({
      posts,
      exemplo: "teste",
    }),
  };
}

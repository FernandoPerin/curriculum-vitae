import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

export interface Post {
  startDate: string;
  endDate?: string;
  role: string;
  abstract: string;
  tecnology: string[];
  company: string;
}

export default function PostService() {
  return {
    async getAll(): Promise<Post[]> {
      const PATH_POSTS = path.resolve(".", "_data", "posts");
      const file = await fs.readdir(PATH_POSTS, { encoding: "utf-8" });
      const postsPromisse = file.map(async (postFileName) => {
        const filePath = path.join(PATH_POSTS, postFileName);
        const postFile = await fs.readFile(filePath, { encoding: "utf-8" });
        const { data } = matter(postFile);
        const post: Post = {
          startDate: new Date(data.startDate).toISOString(),
          endDate: data.endDate ? new Date(data.endDate).toISOString() : "",
          role: data.role,
          abstract: data.abstract,
          company: data.company,
          tecnology: data.tecnology,
        };
        return post;
      });
      const posts = Promise.all(postsPromisse);

      return posts;
    },
  };
}

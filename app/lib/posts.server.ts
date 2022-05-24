import * as fs from "fs/promises";
import * as path from "path";

export interface Post {
  attributes: Record<string, unknown>;
  filename: string;
}

export async function loadPosts(): Promise<Array<Post>> {
  const dir = await fs.readdir(path.join(process.cwd(), "app", "routes", "blog"));
  const posts = await Promise.all(
    dir.filter((path) => path.endsWith(".mdx")).map((path) => import(path))
  );
  console.log(posts);
  return posts;
}

import fs from "node:fs/promises";
import { compile, run, CompileOptions } from "@mdx-js/mdx";

interface PostMetadata {
  title: string;
  slug: string;
  author: string;
  description: string;
  date: string;
  tags: string[];
}

type MDXContent = {
  default: React.ComponentType;
  data: PostMetadata;
};

const allMeta = async (file: string): Promise<PostMetadata> => {
  const code = await compile(await fs.readFile(`./posts/${file}`), {
    outputFormat: "function-body",
    development: false,
  } as CompileOptions);

  const { data } = (await run(String(code), {
    Fragment: "div",
  })) as unknown as MDXContent;

  return data;
};

export const getPostMetadata = async (
  fileList: string[],
): Promise<PostMetadata[]> => {
  return Promise.all(fileList.map(async (post: string) => allMeta(post)));
};

export const getAllFiles = async (path: string): Promise<string[]> => {
  return fs.readdir(`${process.cwd()}/${path}`);
};

export const getSinglePostMeta = async (
  file: string,
): Promise<PostMetadata> => {
  return await allMeta(`${file}.mdx`);
};

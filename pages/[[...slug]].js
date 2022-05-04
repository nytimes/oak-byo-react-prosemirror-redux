import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { remarkCodeHike } from "@code-hike/mdx";
import { CH } from "@code-hike/mdx";
// import theme from "shiki/themes/solarized-dark.json";
import styles from "../styles/Home.module.css";

export default function Post({ source }) {
  return (
    <div className={styles.main}>
      <MDXRemote {...source} components={{ CH }} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const source = fs.readFileSync(
    path.join(process.cwd(), "posts", `${slug}.mdx`)
  );
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [[remarkCodeHike, { autoImport: false }]],
      useDynamicImport: true,
    },
  });
  return { props: { source: mdxSource } };
}

export function getStaticPaths() {
  const posts = fs
    .readdirSync(path.join(process.cwd(), "posts"))
    .map((page) => page.slice(0, page.length - 4));
  return {
    paths: posts.map((slug) => ({ params: { slug: [slug] } })),
    fallback: false,
  };
}

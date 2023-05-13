import { loadPosts, getPostById } from "../../lib/load-posts";
import BlogLayout from "../../components/BlogLayout";

export default function BlogPost({ post }) {
  // const attributes = post.data[0].attributes;
  return <BlogLayout post={post} />;
}

export async function getStaticPaths() {
  const posts = await loadPosts();
  const paths = posts.map((post) => ({
    params: { Slug: post.attributes.Slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const post = await getPostById(context.params?.Slug);
  return {
    props: {
      post: post ? JSON.parse(JSON.stringify(post)) : null,
    },
  };
}

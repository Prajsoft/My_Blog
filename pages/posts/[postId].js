import { loadPosts } from "../../lib/load-posts";

export default function Post({ post }) {
  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await loadPosts();
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await loadPosts(params.id);
  return {
    props: {
      post,
    },
  };
}

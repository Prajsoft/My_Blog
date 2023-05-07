import { loadPosts } from "../../lib/load-posts";
import { getPostbyId } from "../../lib/load-posts";

export default function Post({ post }) {
  console.log("Post function");
  console.log(post);
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
  const paths = posts.map((post) => ({
    params: { postId: post.id.toString() },
  }));
  console.log("paths");
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostbyId(params.postId);
  console.log("getstaticprops");
  console.log(post);
  return {
    props: {
      post,
    },
  };
}

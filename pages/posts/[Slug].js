import { loadPosts } from "../../lib/load-posts";
import { getPostById } from "../../lib/load-posts";

export default function Post({ post }) {
  console.log("Post function");
  console.log(post);
  return (
    <>
      <div>
        <h1>{post.attributes.Title}</h1>
        <p>{post.attributes.Description}</p>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await loadPosts();
  const paths = posts.map((post) => ({
    params: { Slug: post.attributes.Slug },
  }));
  console.log("paths", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostById(params.Slug);
  return {
    props: {
      post,
    },
  };
}

// export async function getStaticProps({ params }) {
//   try {
//     const data = await getPostById(params.Slug);
//     if (!data) {
//       throw new Error("No data received");
//     }
//     const post = await data.json();
//     return {
//       props: {
//         post,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         post: null,
//       },
//     };
//   }
// }

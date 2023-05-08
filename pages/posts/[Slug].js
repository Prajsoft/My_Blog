import {
  loadPosts,
  getPostById,
  prepareForSerializatoin,
} from "../../lib/load-posts";

export default function BlogPost({ post }) {
  console.log("Post function");
  console.log(post);
  return (
    <>
      <div>
        <h1>{post.data.id}</h1>
        {/* <h1>{post.data.attributes.Title}</h1>
        <p>{post.data.attributes.Description}</p> */}
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

// export async function getStaticProps(params) {
//   const post = await getPostById(params.Slug);
//   console.log("post", post);
//   return prepareForSerializatoin({
//     props: {
//       post,
//     },
//   });
// }
export async function getStaticProps(params) {
  const post = await getPostById(params.Slug);
  console.log("post", post);
  return {
    props: {
      ...post,
    },
  };
}

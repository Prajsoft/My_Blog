import {
  loadPosts,
  getPostById,
  prepareForSerializatoin,
} from "../../lib/load-posts";

export default function BlogPost({ post }) {
  console.log("Post function", post);
  console.log(process.env.GREETING);
  const attributes = post.data[0].attributes;
  console.log("attributes", attributes.Content);
  return (
    <>
      <div>
        <h1>{post.id}</h1>
        <h1>{attributes.Title}</h1>
        <p>{attributes.Description}</p>
        <p>{attributes.Content}</p>
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

export async function getStaticProps(context) {
  console.log("context", context);
  console.log("context.params.Slug", context.params?.Slug);
  const post = await getPostById(context.params?.Slug);
  console.log("post", post);
  return {
    props: {
      post: post ? JSON.parse(JSON.stringify(post)) : null,
    },
  };
}

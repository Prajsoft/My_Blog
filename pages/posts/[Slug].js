import {
  loadPosts,
  getPostById,
  prepareForSerializatoin,
} from "../../lib/load-posts";

export default function BlogPost({ post }) {
  const attributes = post.data[0].attributes;
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

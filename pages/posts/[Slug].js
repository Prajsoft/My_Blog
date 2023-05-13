import { loadPosts, getPostById } from "../../lib/load-posts";
// import styles from "../styles/BlogPost.module.css";
// import styles from "./BlogPost.module.css";

export default function BlogPost({ post }) {
  const attributes = post.data[0].attributes;
  return (
    // <div className={styles.bcontainer}>
    //   <h1 className={styles.btitle}>{attributes.Title}</h1>
    //   <p className={styles.bdescription}>{attributes.Description}</p>
    //   <p className={styles.bcontent}>{attributes.Content}</p>
    //   <div>
    <div>
      <h1>{attributes.Title}</h1>
      <p>{attributes.Description}</p>
      <p>{attributes.Content}</p>
    </div>
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

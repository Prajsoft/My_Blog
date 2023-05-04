import styles from "../styles/Home.module.css";
import Blog from "./Blog";
// import Link from 'next/link';

export default function Layout({ post }) {
  return (
    <>
      <h1>Layout Test</h1>
      <div className={styles.gridLayoutContainer}>
        <div>
          <h1>Latest Articles</h1>
          <section>
            <h2>Blog</h2>
            <ul>
              {post.map((post) => (
                <li key={post.id}>
                  {/* {post.id} */}
                  <br />
                  {/* <Link href={`posts/${post.id}`} passHref> */}
                  {/* {`posts/${post.id}`} */}
                  <b>{post.attributes.Title}</b>

                  {/* </Link> */}
                  {/* <br />
              {post.attributes.Tag}
              <br />
              {post.attributes.Description}
              <br />
              {post.attributes.Tag}
              <br />
              {post.attributes.MainContent} */}
                  <br />
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div>
          <h1>Articles</h1>
        </div>
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   // const {params} = context;
//   const data = await loadPosts();

//   return {
//     props: {
//       post: data,
//     },
//   };
// }

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
            <Blog post={post} />
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

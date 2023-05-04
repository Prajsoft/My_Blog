import NavBar from "/components/NavBar";
import Footers from "../components/Footers";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { loadPosts } from "../lib/load-posts";

export default function Careers({ post }) {
  // console.log(post);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>Careers</h1>
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
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // const {params} = context;
  const data = await loadPosts();
  // console.log(allBlogData);
  // const data = JSON.stringify(allBlogData);

  // const allBlogData = await fetch(`http://localhost:1337/api/blogs?filters[id][$eq]= ${params.postId}`);
  // const data = JSON.parse(allBlogData);
  // console.log(data);

  return {
    props: {
      post: data,
    },
  };
}

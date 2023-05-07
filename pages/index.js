import Head from "next/head";
import styles from "../styles/Home.module.css";
import { loadPosts } from "../lib/load-posts";
import Card from "/components/Card";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Study Ghouls</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Study Ghouls</h1>

        <p className={styles.description}>
          <code> One Stop Information Digital Kiosk </code>
        </p>
        <div className={styles.cardContainer}>
          {data.map((post) => (
            <Card
              key={post.id}
              imageSrc={post.attributes.MainPic}
              title={post.attributes.Title}
              description={post.attributes.Description}
              Slug={post.attributes.Slug}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allBlogData = await loadPosts();
  return {
    props: {
      data: allBlogData,
    },
  };
}

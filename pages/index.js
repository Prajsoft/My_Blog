import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import NavBar from '/components/NavBar';
import Footers from '/components/Footers';
import { loadPosts } from '../lib/load-posts';

export async function getStaticProps() {
  const allBlogData = await loadPosts();
  // const allPostsDataParse = JSON.parse(allPostsData);
  // console.log(allBlogData);
  return {
    props: {
      data :allBlogData,
    },
  };
};

export default function Home({data}) {
  // const parsedData = data;
  return (
    <div className={styles.container}>
      <Head>
        <title>Study Ghouls</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Study Ghouls
        </h1>

        <p className={styles.description}>
          <code> One Stop Information Digital Kiosk  </code>
        </p>
        <div className={styles.gridContainerCenter}>
            <div id={styles.AreaOne}>Area 1</div>
            <div id={styles.AreaTwo}>Area 2</div>
            <div id={styles.AreaOne}>Area 3</div>
            <div id={styles.AreaOne}>Area 4</div>
            <div id={styles.AreaOne}>Area 5</div>
            <div id={styles.AreaOne}>Area 6</div>
            <div id={styles.AreaOne}>Area 7</div>
            <div id={styles.AreaOne}>Area 8</div>
            <div id={styles.AreaOne}>Area 9</div>
            <div id={styles.AreaOne}>Area 10</div>
            <div id={styles.AreaOne}>Area 11</div>
            <div id={styles.AreaOne}>Area 12</div>
            <div id={styles.AreaOne}>Area 13</div>
            <div id={styles.AreaOne}>Area 14</div>
            <div id={styles.AreaOne}>Area 15</div>
            <div id={styles.AreaOne}>Area 16</div>
        </div>
        
      </main>
       
      <section>
        <h2>Blog</h2>
        <ul>
          {data.map((post)=> (
            <li key={post.id}>
              {post.id}
              <br />
              {post.attributes.Title}
              <br />
              {post.attributes.Tag}
              <br />
              {post.attributes.Description}
              <br />
              {post.attributes.Tag}
              <br />
              {post.attributes.MainContent}
              <br />
              {/* {post.attributes.MainPic.} */}
            </li> 
            ))
}
           
          
         
        </ul>
      </section>  

      < Footers />
    </div>
  )
}

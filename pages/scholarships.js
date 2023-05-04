import NavBar from "/components/NavBar";
import Footers from "../components/Footers";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { loadPosts } from "../lib/load-posts";

// export default function Scholarships() {
//     return (
//       <>
//       <div className={styles.container}>

//         <div className={styles.main}>
//             <h1>Scholarships</h1>
//             <Layout />

//         </div>

//       </div>
//       </>

//     )
//   }

export default function Scholarships({ post }) {
  // console.log(post);
  return (
    <>
      <Layout post={post} />
    </>
  );
}

export async function getStaticProps() {
  // const {params} = context;
  const data = await loadPosts();

  return {
    props: {
      post: data,
    },
  };
}

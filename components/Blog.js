
import { loadPosts } from '../lib/load-posts';



export async function getStaticProps() {
    // Instead of fetching your `/api` route you can call the same
    // function directly in `getStaticProps`
    const posts = await loadPosts()
  
    // Props returned will be passed to the page component
    return { props: { posts } }
  }

// export default function Blog({ posts }) {
//     return (
//       <ul>
//         {posts.map((post) => (
//           <li>{post.title}</li>
//         ))}
//       </ul>
//     )
//   }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries.
   // This function runs only on the server side
   
  
  
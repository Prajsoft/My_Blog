// import LayoutBlogPage from "../../components/LayoutBlogPage";
import { useRouter } from "next/router";

export default function Post() {
    const router = useRouter();
    // router.push({
    //     pathname: '/posts/[postId]'
    //   })
    console.log(router.query);
    const postId =router.query.postId;

return (
    <>

<h1> {postId} </h1>



</>
)
}


// export async function getStaticPaths(){
//     const paths = await loadPosts();
//     return{
//         paths,
//         fallback: false,
//     };
//  console.log(paths)
// }

// export async function getStaticProps({ params }){
//     const slugs = await loadPosts('slugs', `${params.id}`)
//     return {
//       props: {
//         id
//       }
//     }


// }
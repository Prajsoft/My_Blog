// import LayoutBlogPage from "../../components/LayoutBlogPage";
import { useRouter } from "next/router";

export default function Post({post}) {
    const router = useRouter();
    // router.push({
    //     pathname: '/posts/[postId]'
    //   })
    console.log(router.query);
    const postId =router.query.postId;

return (
    <>

<h1> {post.id} {post.title}</h1>

<p>post.body</p>

</>
)
}
export async function getStaticPaths(){

  return{

    paths: [
      {
        params: { postId: '1'}
      },
    ],
    fallback : false,
  }
}

export async function getStaticProps(context) {
    const {params} = context;
    const response = await fetch(
                `http://localhost:1337/api/blogs?filters[id][$eq]= ${params.postId}`
                )

    const data = await response.json;
    return {
      props: {
        post :data,
      },
    };
  }; 
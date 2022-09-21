// import LayoutBlogPage from "../../components/LayoutBlogPage";
import { useRouter } from "next/router";

export default function Post({post}) {
    // const router = useRouter();
    // // router.push({
    // //     pathname: '/posts/[postId]'
    // //   })
    // console.log(router.query);
    // const postId =router.query.postId;

return (
    <>

<h1> {post.id} {post.title}</h1>

<p>post.body</p>

</>
)
}
export async function getStaticPaths(){

  return{

    // paths: [
    //   {
    //     params: { postId: '1'}
    //   },
    // ],
    paths,
    fallback : false,
  }
}

export async function getStaticProps(context) {
    const {params} = context;
    console.log("Hello");
    console.log(params);
    const response = await fetch(
                `http://localhost:1337/api/blogs?filters[id][$eq]= ${params.postId}`
                ) .then (
                   (response)=>{return response.json}
                )
console.log(response.json)
    const data = await response.json;
    console.log(data);

    const paths = data.map( post => {
      return {
        params: {
          post= `$(post.id)`
        }
      }
    })
    return {
      props: {
        post :data,
      },  
    };
  }; 
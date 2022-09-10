import LayoutBlogPage from "../../components/LayoutBlogPage";
import { loadPosts } from '../lib/load-posts';

export default function Post() {

return <LayoutBlogPage>



</LayoutBlogPage>;
}


export async function getStaticPaths(){
    const paths = await loadPosts();
    return{
        paths,
        fallback: false,
    };
 console.log(paths)
}

export async function getStaticProps({ params }){
    const slugs = await loadPosts('slugs', `${params.id}`)
    return {
      props: {
        id
      }
    }


}
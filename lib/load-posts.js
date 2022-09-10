export async function loadPosts(path,params=null) {
    // Call an external API endpoint to get posts
    try{

    const res = await fetch('http://localhost:1337/api/blogs/?populate[0]=seoData&populate[1]=seoData.sharedImage&populate[2]=seoData.sharedImage.media');
    const data = await res.json();

    return data.data;
    } catch (err) {

      console.error('an error occured');
    }
   
    // console.log(data);
  
  }

  // export function getPostData(id) {
  //   const fullPath = path.join(postsDirectory, `${id}.md`);
  //   const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  //   // Use gray-matter to parse the post metadata section
  //   const matterResult = matter(fileContents);
  
  //   // Combine the data with the id
  //   return {
  //     id,
  //     ...matterResult.data,
  //   };
  // }


  

  
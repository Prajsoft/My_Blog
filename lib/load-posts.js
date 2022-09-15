


export async function loadPosts() {
    // Call an external API endpoint to get posts
  
    
        const res = await fetch('http://localhost:1337/api/blogs');
        const data = await res.json();
      

    return data.data;



    // catch (err) {

    //   console.error('an error occured');
    // } 
  }
    // console.log(data2.data);
  
  

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


  

  
export async function loadPosts() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:1337/api/blogs/?populate[0]=seoData&populate[1]=seoData.sharedImage&populate[2]=seoData.sharedImage.media');
    const data = await res.json();
    // console.log(data);
    return data.data;
  }

  


  

  
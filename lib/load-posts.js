export async function loadPosts() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:1337/api/blogs');
    const data = await res.json();
    // console.log(data);
    return data.data;
  }


  

  
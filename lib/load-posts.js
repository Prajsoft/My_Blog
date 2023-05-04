import axios from "axios";

// axios.defaults.baseURL = "http://localhost:1337/api/";

export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await axios.get(`http://localhost:1337/api/blogs`);
  const data = await res.data;
  return data.data;
}

// export async function loadPosts() {
//   // Call an external API endpoint to get posts

//   const res = await fetch("http://localhost:1337/api/blogs");
//   const data = await res.json();

//   return data.data;
// }

import axios from "axios";

// axios.defaults.baseURL = "http://localhost:1337/api/";

export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await axios.get(`http://localhost:1337/api/blogs`);
  const data = await res.data;
  return data.data;
}

export async function getPostById(Slug) {
  try {
    const response = await axios.get(
      `http://localhost:1337/api/blogs?Slug=${Slug}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getAllPosts() {
  const response = await fetch(`${process.env.STRAPI_API_URL}/posts`);
  const posts = await response.json();
  return posts;
}

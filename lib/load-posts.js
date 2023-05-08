import axios from "axios";
// imort variable from .env.local file
export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await axios.get(`http://localhost:1337/api/blogs?populate=*`);
  const data = await res.data;
  return data.data;
}

export async function getPostById(Slug) {
  // try {
  const response = await axios.get(
    `http://localhost:1337/api/blogs?fields[0]=Title&fields[1]=Description&filters[Slug][$eq]=${Slug}`
  );
  return response.data;
  // } catch (error) {
  //   console.error(error);
  // }
}

// async function getAllPosts() {
//   const response = await fetch(`${process.env.STRAPI_API_URL}/posts`);
//   const posts = await response.json();
//   return posts;
// }

// export function prepareForSerializatoin(obj) {
//   return obj.mapValues(obj, (value) =>
//     typeof value === "undefined" ? null : value
//   );
// }

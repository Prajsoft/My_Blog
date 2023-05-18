import axios from "axios";
const ApiUrl = process.env.API_URL;
const ApiKey = process.env.BACKEND_API_KEY;
const api = axios.create({
  baseURL: ApiUrl,
  Authorization: `Bearer ${ApiKey}`,
});

export async function loadPosts() {
  try {
    // Call an external API endpoint to get posts
    const res = await api.get(`${ApiUrl}/api/blogs?populate=*`);
    const data = await res.data.data;
    return data;
  } catch (err) {
    //Here handle the error
    console.error("Error loading posts:", err);
    return { err: true };
  }
}

export async function getPostById(Slug) {
  try {
    const response = await api.get(
      `${ApiUrl}/api/blogs?fields[0]=Title&fields[1]=Description&fields[2]=Content&populate[0]=HeroPic&filters[Slug][$eq]=${Slug}`
    );
    const data = response.data;
    return data;
  } catch (err) {
    //Here handle the error
    console.error("Error getting post by Slug", err);
    return { err: true };
  }
}

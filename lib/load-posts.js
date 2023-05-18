import axios from "axios";
const ApiUrl = process.env.API_URL;
const ApiKey = process.env.BACKEND_API_KEY;
const api = axios.create({
  baseURL: ApiUrl,
  Authorization: `Bearer ${ApiKey}`,
});

export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await api.get(`${ApiUrl}/api/blogs?populate=*`);
  const data = await res.data;
  return data.data;
}

export async function getPostById(Slug) {
  const response = await api.get(
    // `http://localhost:1337/api/blogs?fields[0]=Title&fields[1]=Description&fields[2]=Content&filters[Slug][$eq]=${Slug}`

    `${ApiUrl}/api/blogs?fields[0]=Title&fields[1]=Description&fields[2]=Content&populate[0]=HeroPic&filters[Slug][$eq]=${Slug}`
  );
  return response.data;
}

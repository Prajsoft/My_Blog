import axios from "axios";
const api = axios.create({
  baseURL: `http://localhost:1337`,
  Authorization: `Bearer f8b9d8b11fc41d712f2444e93bd4f7c32fe87ad2f13e5746000ec8ec8eca46a59aa9b694951f72b090b5c3e8ae1fd57c070a83dd852728cb5ccb9e7120578565522f47d8784a68ba4414354f8fc3394ec2989713e414a835211961d1e83434912b593c822da395a97e675be90c737d23980d7f397d1b50a87a79092d1f9b535e`,
});

export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await api.get(`http://localhost:1337/api/blogs?populate=*`);
  const data = await res.data;
  return data.data;
}

export async function getPostById(Slug) {
  const response = await api.get(
    // `http://localhost:1337/api/blogs?fields[0]=Title&fields[1]=Description&fields[2]=Content&filters[Slug][$eq]=${Slug}`

    `http://localhost:1337/api/blogs?fields[0]=Title&fields[1]=Description&fields[2]=Content&populate[0]=HeroPic&filters[Slug][$eq]=${Slug}`
  );
  return response.data;
}

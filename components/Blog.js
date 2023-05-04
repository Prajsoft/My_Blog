import { loadPosts } from "../lib/load-posts";

export default function Blog({ post }) {
  return (
    <>
      <h2>Blog</h2>
      <ul>
        {post.map((post) => (
          <li key={post.id}>
            {/* {post.id} */}
            <br />
            {/* <Link href={`posts/${post.id}`} passHref> */}
            {/* {`posts/${post.id}`} */}
            <b>{post.attributes.Title}</b>

            {/* </Link> */}
            {/* <br />
      {post.attributes.Tag}
      <br />
      {post.attributes.Description}
      <br />
      {post.attributes.Tag}
      <br />
      {post.attributes.MainContent} */}
            <br />
          </li>
        ))}
      </ul>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// This function runs only on the server side

import { loadPosts, getPostById } from "../../lib/load-posts";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BlogLayout from "../../components/BlogLayout";
import Head from "next/head";

export default function BlogPost({ post, err }) {
  const router = useRouter();
  useEffect(() => {
    if (err) {
      // Redirect to 404 page
      router.push("/404");
    }
  }, [err, router]);

  if (err) {
    return <p>Loading...</p>; // Return null or a loading spinner while redirecting
  }

  const attributes = post.data[0].attributes;
  console.log("slug post", post);
  return (
    <>
      <Head>
        <title>{attributes.Title}</title>
        <meta name="description" content={attributes.Description} />
        <meta name="keywords" content={attributes.Keywords} />
        <meta name="author" content={attributes.Author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={attributes.Title} />
        <meta property="og:description" content={attributes.Description} />
        <meta
          property="og:image"
          content={attributes.HeroPic.data.attributes.url}
        />
        <meta property="og:url" content={attributes.Slug} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Study Ghouls" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@studyghouls" />
        <meta name="twitter:title" content={attributes.Title} />
        <meta name="twitter:description" content={attributes.Description} />
        <meta name="linkedin:owner" content="Your LinkedIn Profile ID" />
        <meta name="twitter:image" content={attributes.HeroPic} />
        <meta name="twitter:image:alt" content={attributes.Title} />
        <meta name="twitter:creator" content="@studyghouls" />
        <meta name="twitter:domain" content="studyghouls.com" />
        <meta name="robots" content="index, follow" />
      </Head>
      <BlogLayout post={post} />
    </>
  );
}

export async function getStaticPaths() {
  const posts = await loadPosts();
  const paths = posts.map((post) => ({
    params: { Slug: post.attributes.Slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  try {
    const post = await getPostById(context.params?.Slug);

    return {
      props: {
        post: post ? JSON.parse(JSON.stringify(post)) : null,
        err: false,
      },
    };
  } catch (err) {
    console.error("Error getting post by Slug", err);
    return {
      props: { err: true },
    };
  }
}

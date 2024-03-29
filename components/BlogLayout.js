import styles from "../styles/BlogLayout.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import htmlReactParser from "html-react-parser";

export default function BlogLayout({ post }) {
  const ApiUrl = process.env.API_URL;
  const attributes = post.data[0].attributes;
  const image = attributes.HeroPic.data.attributes.url;
  const imageUrl = new URL(image, ApiUrl).toString();
  // const imageSrc = `${ApiUrl}${image}`;

  const parallaxRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      parallaxRef.current.style.transform = `translateY(-${scrollTop * 0.5}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div ref={parallaxRef} className={styles.parallaxContainer}>
          <Image
            src={imageUrl}
            alt={attributes.Title}
            className={styles.image}
            layout="responsive"
            width={1200}
            height={800}
            priority={true}
          />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>{attributes.Title}</h1>
        <p className={styles.description}>{attributes.Description}</p>
        <div className={styles.content}>
          {htmlReactParser(attributes.Content)}
        </div>
      </div>
    </div>
  );
}

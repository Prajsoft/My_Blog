import styles from "../styles/BlogLayout.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogLayout({ post }) {
  const attributes = post.data[0].attributes;
  return (
    <>
      <div>
        <h1 className={styles.bTitle}>{attributes.Title}</h1>
        <p className={styles.bDescription}>{attributes.Description}</p>
        <div className={styles.bContent}>
          <ReactMarkdown
            children={attributes.Content}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </div>
    </>
  );
}

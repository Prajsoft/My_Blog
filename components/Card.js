import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Card({ imageSrc, title, description, postId }) {
  console.log("Card function", postId);
  return (
    <>
      <div className={styles.card}>
        <div>
          <div>
            <Image
              src={imageSrc}
              alt={title}
              className={styles.cardImage}
              width={640}
              height={480}
            />
          </div>
          <h2 className={styles.ctitle}> {title} </h2>
          <p className={styles.cdescription}> {description}</p>
        </div>
        <Link href={`/pages/posts/${postId.id}`}>
          <a className={styles.readMore}>Read More</a>
        </Link>
      </div>
    </>
  );
}

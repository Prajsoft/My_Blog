import Image from "next/image";
import styles from "../styles/Card.module.css";
import Link from "next/link";

export default function Card({ imageSrc, title, description, Slug }) {
  const image = `http://localhost:1337${imageSrc}`;
  return (
    <>
      <div className={styles.card}>
        <div>
          <div>
            <Image
              src={image}
              alt={title}
              className={styles.cardImage}
              width={640}
              height={480}
            />
          </div>
          <h2 className={styles.ctitle}> {title} </h2>
          <p className={styles.cdescription}> {description}</p>
        </div>
        <Link href={`/posts/${Slug}`}>
          <a className={styles.creadMore}>Read More</a>
        </Link>
      </div>
    </>
  );
}

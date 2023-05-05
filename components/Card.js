import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Card({ imageSrc, title, description }) {
  return (
    <>
      <div className={styles.card}>
        <div>
          <Image
            src={imageSrc}
            alt={title}
            className={styles.cimage}
            width={640}
            height={480}
          />
          <h2 className={styles.ctitle}> {title} </h2>
          <p className={styles.cdescription}> {description}</p>
        </div>
      </div>
    </>
  );
}

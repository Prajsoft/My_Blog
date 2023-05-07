import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Card({ imageSrc, title, description }) {
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
      </div>
    </>
  );
}

import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <nav className={styles.navbar}>
        <h3 className={styles.logo}>
          <Link href="/">Home</Link>
        </h3>
        <div className={styles.menu}>
          <Link href="/careers">
            <a>Careers</a>
          </Link>
          <Link href="/degrees">
            <a>Degrees</a>
          </Link>
          <Link href="/exams">
            <a>Exams</a>
          </Link>
          <Link href="/studyabroad">
            <a>Study Abroad</a>
          </Link>
          <Link href="/scholarships">
            <a>Scholarships</a>
          </Link>
          <Link href="/howtoguides">
            <a>How to Guides</a>
          </Link>
          <Link href="/news">
            <a>News</a>
          </Link>
        </div>
      </nav>
    </>
  );
}

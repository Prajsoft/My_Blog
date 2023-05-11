import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footers() {
  return (
    <>
      <div className={styles.footer}>
        <h5>
          <Link href="/aboutus">
            <a>About Us</a>
          </Link>
        </h5>
        <h5>
          <Link href="/privacypolicy">
            <a>Privacy Policy</a>
          </Link>
        </h5>
        <h5>
          <Link href="/termsandcondition">
            <a>Terms & Conditions</a>
          </Link>
        </h5>
        <h5>
          <Link href="/sitemap">
            <a>Sitemap</a>
          </Link>
        </h5>
      </div>
    </>
  );
}

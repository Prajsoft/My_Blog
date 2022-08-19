import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Footers()
{
 return(
<>
    <div className = {styles.footer1}>
    <h5><Link href="./aboutus">About Us</Link> </h5>
    <h5><Link href="./privacypolicy">Privacy Policy</Link> </h5>
    <h5><Link href="./termsandcondition">Terms & Conditions</Link></h5>
    <h5><Link href="./sitemap">Sitemap</Link></h5>
   
    </div>

    </>
 )   
}
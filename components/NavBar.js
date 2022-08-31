
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function NavBar()
{
 return(
<>

    <div className = {styles.navbar}>
    <h3><Link href="./">Home</Link> </h3>
    <h3><Link href="./careers">Careers</Link> </h3>
    <h3><Link href="./degrees">Degrees</Link></h3>
    <h3><Link href="./exams">Exams</Link></h3>
    <h3><Link href="./studyabroad">Study Abroad</Link></h3>
    <h3><Link href="./scholarships">Scholarships</Link></h3>
    <h3><Link href="./howtoguides">How to Guides</Link></h3>
    <h3><Link href="./news">News</Link></h3>
    </div>


    </>
 )   
}
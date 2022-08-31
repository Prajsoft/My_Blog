import NavBar from '/components/NavBar';
import Footers from '../components/Footers';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function StudyAbroad() {
    return (
      <>
      <div className={styles.container}>
      < NavBar />
        <div className={styles.main}>
            <h1>StudyAbroad</h1>
            <Layout />
            
        </div>
      < Footers />
      </div>
      </>
     

    ) 
  }
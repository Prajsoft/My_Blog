import NavBar from '/components/NavBar';
import Footers from '../components/Footers';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Scholarships() {
    return (
      <>
      <div className={styles.container}>
      
        <div className={styles.main}>
            <h1>Scholarships</h1>
            <Layout />
            
        </div>
      
      </div>
      </>
     

    ) 
  }
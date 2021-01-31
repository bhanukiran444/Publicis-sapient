import Head from 'next/head'
import styles from '../styles/Layout.module.css'
const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
    <Head>
      <title>SpaceX Launch Programs - by Bhanukiran</title>
    </Head>
      <h3>SpaceX Launch Programs</h3>
      <div>{children}</div>
      <footer><strong>Developed by:</strong> <span>Bhanukiran S</span></footer>
    </div>
  );
};

export default Layout;

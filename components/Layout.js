import Head from "next/head";
import styles from "../styles/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>SpaceX Launch Programs - by Bhanukiran</title>
        <meta charSet="UTF-8" />
        <meta name="SpaceX Launch Programs" />
        <meta
          name="description"
          content="SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."
        />
        <meta
          name="keywords"
          content="space,spacex,aerospace,elon musk,mars,falcon 9,falcon heavy,dragon"
        />
        <meta name="author" content="Bhanukiran S" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <h3>SpaceX Launch Programs</h3>
      <div>{children}</div>
      <footer>
        <strong>Developed by:</strong> <span>Bhanukiran S</span>
      </footer>
    </div>
  );
};

export default Layout;

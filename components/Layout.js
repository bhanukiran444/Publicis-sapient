import styles from '../styles/Layout.module.css'
const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <h3>SpaceX Launch Programs</h3>
      <div>{children}</div>
      <footer><strong>Developed by:</strong> <span>Bhanukiran S</span></footer>
    </div>
  );
};

export default Layout;

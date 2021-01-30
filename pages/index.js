import FiltersOverview from "../components/FiltersOverview";
import ProductTiles from "../components/ProductTiles";
import styles from '../styles/Layout.module.css'
export default function Home({ data }) {
  console.log(data);

  return (
    <div className={styles.MainContainer}>
      <FiltersOverview />
      <ProductTiles data={data}>rockets</ProductTiles>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://api.spacexdata.com/v3/launches?limit=100");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

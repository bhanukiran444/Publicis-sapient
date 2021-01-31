import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FiltersOverview from "../../components/FiltersOverview";
import ProductTiles from "../../components/ProductTiles";
import styles from "../../styles/Layout.module.css";
import axios from "axios";

const index = () => {
  const router = useRouter();
  const { param } = router.query;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.spacexdata.com/v3/launches?limit=100?${param}`
      )
      .then((res) => {
        setProducts(res.data);
      });
  }, [param]);

  return (
    <div className={styles.MainContainer}>
      <FiltersOverview />
      <ProductTiles data={products} />
    </div>
  );
};

export default index;

import Tile from "./Tile";
import styles from "../styles/ProductTiles.module.css";

const ProductTiles = ({ data }) => {
  return (
    <div className={styles.ProductTileContainer}>
      {data.map((product) => {
        return <Tile key={product.flight_number} product={product} />;
      })}
    </div>
  );
};

export default ProductTiles;

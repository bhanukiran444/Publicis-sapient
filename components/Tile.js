import styles from "../styles/ProductTiles.module.css";

export const Tile = ({ product }) => {
  return (
    <div className={styles.TileContainer}>
      <img src={product.links.mission_patch_small} />
      <p className={styles.TileHeader}>
        {product.mission_name} #{product.flight_number}
      </p>
      <div>
        <p>Mission Ids</p>
        <ul>
          {product.mission_id.map((id) => (
            <li key={id}>{id}</li>
          ))}
        </ul>
      </div>

      <p>
        Successful Launch:{" "}
        <span>{product.launch_success ? "True" : "False"}</span>
      </p>
      <p>
        Successful Landing:{" "}
        <span>{product.launch_landing ? "True" : "False"}</span>{" "}
      </p>
    </div>
  );
};

export default Tile;

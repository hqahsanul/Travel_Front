// CustomLoader.jsx
import React from "react";
import styles from "./css/style.module.css";

const CustomLoader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.wait}></div>
      <div className={styles.plane}>
        <img
          src="https://zupimages.net/up/19/34/4820.gif"
          alt="plane"
          className={styles.plane_img}
        />
      </div>
      <div className={styles.earth_wrapper}>
        <div className={styles.earth}></div>
      </div>
    </div>
  );
};

export default CustomLoader;

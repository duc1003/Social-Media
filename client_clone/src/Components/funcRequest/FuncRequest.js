import React from "react";
import styles from './funcRequest.module.css'
const FuncRequest = () => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
          alt=""
        />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.cardName}>Hoàng Kim Thịnh</p>
        <div className={styles.cardButton}>
          <button>Following</button>
          <button>Dismiss</button>
        </div>
      </div>
    </div>
  );
};

export default FuncRequest;

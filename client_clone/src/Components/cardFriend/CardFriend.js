import React from "react";
import styles from "./cardFriend.module.css";
const CardFriend = () => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
          alt=""
        />
      </div>
      <div className={styles.cardTitle}>Hoàng Kim Thịnh</div>
      <button className={styles.save}>Xác nhận</button>
      <button className={styles.cancel}>Xóa</button>
    </div>
  );
};

export default CardFriend;

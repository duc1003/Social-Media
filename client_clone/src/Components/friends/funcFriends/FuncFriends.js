import React from "react";
import styles from "./funcFriends.module.css";
const FuncFriends = ({icon,title,active,son,onClick}) => {
  return (
    <div className={`${styles.list} ${son ? styles.son : ''}`} onClick={onClick}>
      <div className={`${styles.listPadding} ${active ? styles.active : ''}`}>
        <div className={styles.listIcon}>
          {icon}
        </div>
        <h5>{title}</h5>
      </div>
    </div>
  );
};

export default FuncFriends;

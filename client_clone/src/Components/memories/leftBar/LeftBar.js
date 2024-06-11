'use client'
import React, { useState } from "react";
import styles from "./leftBar.module.css";
import Link from "next/link";
import FuncFriends from "../../friends/funcFriends/FuncFriends";
import HouseIcon from '@mui/icons-material/House';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import TodayIcon from '@mui/icons-material/Today';
const LeftBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleFuncMemoriesClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.container}>
      <div className={styles.boxTitle}>
        <h4>Kỷ niệm</h4>
        <Link href="/memories" className={styles.memoriesLink}>
          <FuncFriends
            icon={<HouseIcon />}
            title="Trang chủ kỷ niệm"
            active={activeIndex === 0}
            onClick={() => handleFuncMemoriesClick(0)}
          />
        </Link>
        <hr/>
      </div>
      <div className={styles.card}>
        <h5 className={styles.cardTitle}>Cài đặt</h5>
        <Link href="/memories/notification" className={styles.memoriesLink}>
          <FuncFriends
            icon={<NotificationsIcon />}
            title="Thông báo"
            active={activeIndex === 1}
            onClick={() => handleFuncMemoriesClick(1)}
          />
        </Link>
        <Link href="/memories/hidePerson" className={styles.memoriesLink}>
          <FuncFriends
            icon={<PersonRemoveIcon />}
            title="Ẩn mọi người"
            active={activeIndex === 2}
            onClick={() => handleFuncMemoriesClick(2)}
          />
        </Link>
        <Link href="/memories/hideDay" className={styles.memoriesLink}>
          <FuncFriends
            icon={<TodayIcon />}
            title="Ẩn ngày"
            active={activeIndex === 3}
            onClick={() => handleFuncMemoriesClick(3)}
          />
        </Link>
      </div>
    </div>
  );
};

export default LeftBar;

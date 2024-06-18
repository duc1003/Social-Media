"use client";
import React, { useState, useEffect } from "react";
import styles from "./leftBar.module.css";
import Link from "next/link";
import FuncFriends from "../../friends/funcFriends/FuncFriends";
import HouseIcon from "@mui/icons-material/House";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import TodayIcon from "@mui/icons-material/Today";
import { usePathname } from "next/navigation";
const LeftBar = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div className={styles.container}>
      <div className={styles.boxTitle}>
        <h4>Kỷ niệm</h4>
        <Link href="/memories" className={styles.memoriesLink}>
          <FuncFriends
            icon={<HouseIcon />}
            title="Trang chủ kỷ niệm"
            active={pathName === "/memories"}
          />
        </Link>
        <hr />
      </div>
      <div className={styles.card}>
        <h5 className={styles.cardTitle}>Cài đặt</h5>
        <Link href="/memories/notification" className={styles.memoriesLink}>
          <FuncFriends
            icon={<NotificationsIcon />}
            title="Thông báo"
            active={pathName === "/memories/notification"}
          />
        </Link>
        <Link href="/memories/hidePerson" className={styles.memoriesLink}>
          <FuncFriends
            icon={<PersonRemoveIcon />}
            title="Ẩn mọi người"
            active={pathName === "/memories/hidePerson"}
          />
        </Link>
        <Link href="/memories/hideDay" className={styles.memoriesLink}>
          <FuncFriends
            icon={<TodayIcon />}
            title="Ẩn ngày"
            active={pathName === "/memories/hideDay"}
          />
        </Link>
      </div>
    </div>
  );
};

export default LeftBar;

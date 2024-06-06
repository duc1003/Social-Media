"use client";
import styles from "./friends.module.css";
import Header from "../../Components/header/Header";
import CardFriend from "../../Components/cardFriend/CardFriend";
import SettingsIcon from "@mui/icons-material/Settings";
import FuncFriends from "../../Components/funcFriends/FuncFriends";
import GroupIcon from "@mui/icons-material/Group";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CakeIcon from "@mui/icons-material/Cake";
import { useState } from "react";
import Link from "next/link";
const Friends = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleFuncFriendsClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.leftBar}>
          <div className={styles.leftPadding}>
            <div className={styles.setTitle}>
              <h4>BẠN BÈ</h4>
              <div className={styles.icon}>
                <SettingsIcon />
              </div>
            </div>
            <div className={styles.leftContent}>
              <FuncFriends
                icon={<GroupIcon />}
                title="Trang chủ"
                active={activeIndex === 0}
                onClick={() => handleFuncFriendsClick(0)}
              />
              <Link href="/friends/request" className={styles.friendLink}>
                <FuncFriends
                  icon={<AccessibilityNewIcon />}
                  title="Lời mời kết bạn"
                />
              </Link>
              <Link href="/friends/suggest" className={styles.friendLink}>
                <FuncFriends icon={<PersonAddIcon />} title="Gợi ý" />
              </Link>
              <FuncFriends icon={<PeopleAltIcon />} title="Tất cả bạn bè" />
              <FuncFriends
                icon={<CakeIcon />}
                title="Sinh nhật"
                active={activeIndex === 4}
                onClick={() => handleFuncFriendsClick(4)}
              />
            </div>
          </div>
        </div>
        <div className={styles.rightBar}>
          <div className={styles.invite}>
            <div className={styles.rightTitle}>
              <h4>Lời mời kết bạn</h4>
              <Link href="/friends/request" className={styles.rightLink}>
                Xem tất cả
              </Link>
            </div>
            <div className={styles.rightCard}>
              <CardFriend />
            </div>
            <hr />
          </div>
          <div className={styles.suggest}>
            <div className={styles.rightTitle}>
              <h4>Những người bạn có thể biết</h4>
              <Link href="/friends/suggest" className={styles.rightLink}>
                Xem tất cả
              </Link>
            </div>
            <div className={styles.rightCard}>
              <CardFriend />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;

"use client";
import styles from "./friends.module.css";
import Header from "../../Components/header/Header";
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
              <FuncFriends
                icon={<AccessibilityNewIcon />}
                title="Lời mời kết bạn"
              />
              <FuncFriends icon={<PersonAddIcon />} title="Gợi ý" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;

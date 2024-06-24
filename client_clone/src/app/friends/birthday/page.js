"use client";
import styles from "./birthday.module.css";
import Header from "../../../Components/header/Header";
import CardFriend from "../../../Components/friends/cardFriend/CardFriend";
import SettingsIcon from "@mui/icons-material/Settings";
import FuncFriends from "../../../Components/friends/funcFriends/FuncFriends";
import GroupIcon from "@mui/icons-material/Group";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CakeIcon from "@mui/icons-material/Cake";
import Link from "next/link";
const Friends = () => {
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
              <Link href="/friends" className={styles.friendLink}>
                <FuncFriends icon={<GroupIcon />} title="Trang chủ" />
              </Link>
              <Link href="/friends/request" className={styles.friendLink}>
                <FuncFriends
                  icon={<AccessibilityNewIcon />}
                  title="Lời mời kết bạn"
                />
              </Link>
              <Link href="/friends/suggest" className={styles.friendLink}>
                <FuncFriends icon={<PersonAddIcon />} title="Gợi ý" />
              </Link>
              <Link className={styles.friendLink} href="/friends/allFriends">
                <FuncFriends icon={<PeopleAltIcon />} title="Tất cả bạn bè" />
              </Link>
              <Link href="/friends/birthday" className={styles.friendLink}>
                <FuncFriends icon={<CakeIcon />} title="Sinh nhật" active />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.rightBar}>
          <div className={styles.boxBirthday}>
            <p className={styles.month}>Tháng 6</p>
            <p className={styles.person}>
              Hoàng Kim Thịnh <span>và 6 người khác</span>
            </p>
            <div className={styles.birthday}>
              <div className={styles.avatar}>
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;

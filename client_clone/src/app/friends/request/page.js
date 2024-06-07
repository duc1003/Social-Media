import React from "react";
import styles from "./request.module.css";
import Header from "../../../Components/header/Header";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import friendRequest from '../../../assets/friendRequest.png'
import FuncRequest from '../../../Components/friends/funcRequest/FuncRequest'
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.leftBar}>
          <div className={styles.boxTitle}>
            <Link href={'/friends'} className={styles.link}><ArrowBackIcon className={styles.boxTitleIcon} /></Link>
            <div className={styles.title}>
              <p>Bạn bè</p>
              <h4>Lời mời kết bạn</h4>
            </div>
          </div>
          <div className={styles.leftCard}>
            <h4>Thư mời kết bạn</h4>
            <FuncRequest/>
          </div>
        </div>
        <div className={styles.rightBar}>
          <div className={styles.rightBarContent}>
            <Image src={friendRequest} width={70} height={70}/>
            <p>Lời mời hiển thị ở đây</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

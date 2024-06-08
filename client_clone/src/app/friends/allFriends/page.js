'use client'
import React, { useState } from "react";
import styles from "./allFriends.module.css";
import Header from "../../../Components/header/Header";
import FormFriends from "../../../Components/friends/formFriends/FormFriends";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import friendRequest from "../../../assets/friendRequest.png";
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from "next/image";
import Link from "next/link";
const page = () => {
    const [active,setActive] = useState(true);
    const handleActive = ()=>{
        setActive(!active);
    }
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.leftBar}>
          <div className={styles.boxTitle}>
            <Link href={"/friends"} className={styles.link}>
              <ArrowBackIcon className={styles.boxTitleIcon} />
            </Link>
            <div className={styles.title}>
              <p>Bạn bè</p>
              <h4>Tất cả bạn bè</h4>
            </div>
          </div>
          <div className={styles.search}>
            <input type="text" className={styles.input} placeholder = "Tìm kiếm bạn bè"/>
            <SearchIcon className={styles.searchIcon}/>
          </div>
          <hr/>
          <div className={styles.leftCard}>
            <h4>1 người bạn</h4>
            <div className={styles.card}>
              <div className={styles.img}>
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                  alt=""
                />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.cardName}>Hoàng Kim Thịnh</p>
              </div>
              <MoreHorizIcon className={styles.cardIcon} onClick = {handleActive} />
              <FormFriends active = {active}/>
            </div>
          </div>
        </div>
        <div className={styles.rightBar}>
          <div className={styles.rightBarContent}>
            <Image src={friendRequest} width={70} height={70} />
            <p>Lời mời hiển thị ở đây</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

import React from "react";
import styles from "./create.module.css";
import Header from "../../../Components/header/Header";
import LeftBar from "../LeftBar";
import Posts from "../../../Components/posts/Posts";
import Image from "next/image";
export default function FeedPage() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <LeftBar />
        <div className={styles.content}>
          <div className={styles.home}>
            <div className={styles.contentCreate}>
            <Image
              className={styles.inputImg}
              width={800}
              height={341}
              src={"https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"}
            />
            <div className={styles.decs}>
              <h2 className={styles.name}>Ten Nhom</h2>
              <div className={styles.detail}>
                <h4>Quyen rieng tu</h4>
                <h4>.</h4>
                <h4>1 thanh vien</h4>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

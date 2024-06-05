import Image from "next/image";
import styles from "./page.module.css";
import Header from "../Components/header/Header";
import LeftBar from "../Components/leftBar/LeftBar";
import HomeRight from "../Components/homeRight/HomeRight";
import Stories from "../Components/stories/Stories";
import Share from "../Components/share/Share";
import Posts from "../Components/posts/Posts";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.wrapper}>
        <LeftBar/>
        <div className={styles.content}>
          <div className={styles.home}>
            <Stories/>
            <Share/>
            <Posts/>
          </div>
        </div>
        <HomeRight/>
      </div>
    </div>
  );
}

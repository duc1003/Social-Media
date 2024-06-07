import React from 'react'
import styles from "./feed.module.css"
import Header from "../../../Components/header/Header"
import LeftBar from "../LeftBar"
import Posts from "../../../Components/posts/Posts"


export default function FeedPage() {
  return (
    <div className={styles.container}>
    <Header/>
    <div className={styles.wrapper}>
      <LeftBar/>
      <div className={styles.content}>
        <div className={styles.home}>
          <div className={styles.title}>Hoạt động gần đây</div>
          <Posts/>
        </div>
      </div>
    </div>
  </div>
  )
}

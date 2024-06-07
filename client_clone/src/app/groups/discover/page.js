import React from 'react'
import styles from "./discover.module.css"
import Header from "../../../Components/header/Header"
import LeftBar from "../LeftBar"
import Posts from "../../../Components/posts/Posts"
export default function discoverPage() {
  return (
    <div className={styles.container}>
    <Header/>
    <div className={styles.wrapper}>
      <LeftBar/>
      <div className={styles.content}>
        <div className={styles.home}>
          <Posts/>
        </div>
      </div>
    </div>
  </div>
  )
}

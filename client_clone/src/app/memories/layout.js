import React from 'react'
import styles from './memories.module.css'
import Header from '../../Components/header/Header'
import LeftBar from '../../Components/memories/leftBar/LeftBar'
const layout = ({children}) => {
  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.wrapper}>
            <LeftBar/>
            <div className={styles.rightBar}>{children}</div>
        </div>
    </div>
  )
}

export default layout
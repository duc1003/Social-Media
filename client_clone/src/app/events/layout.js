'use client'
import React, { useState } from 'react'
import styles from './events.module.css'
import Header from '../../Components/header/Header'
import LeftBar from '../../Components/events/leftBar/LeftBar'
import Model from '../../Components/events/model/Model'

const Layout = ({children}) => {
  const [openModel, setOpenPopper] = useState(false)
  const handleEvent = () => {
    setOpenPopper(true)
  }
  const handleClose = () => {
    setOpenPopper(false)
  }
  const handleSave = (data) => {
    console.log("Event Data:", data)
    setOpenPopper(false)
  }
  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.wrapper}>
          <LeftBar onButtonClick={handleEvent}/>
          <div className={styles.rightBar}>{children}</div>
        </div>
        {openModel ? <Model onClose={handleClose} onSave={handleSave} /> : <div></div>}
    </div>
  )
}

export default Layout;

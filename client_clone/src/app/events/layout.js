'use client'
import React, { useState } from 'react'
import styles from './events.module.css'
import Header from '../../Components/header/Header'
import LeftBar from '../../Components/events/leftBar/LeftBar'
import Model from '../../Components/events/model/Model'
const layout = ({children}) => {
  const [openModel,setOpenPopper] = useState(false)
  const handleEvent = ()=>{
    setOpenPopper(true)
  }
  const handleClose = ()=>{
    setOpenPopper(false)
  }
  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.wrapper}>
          <LeftBar onButtonClick = {handleEvent}/>
          <div className={styles.rightBar}>{children}</div>
        </div>
        {openModel ? <Model onClose = {handleClose} /> : <div></div>}
    </div>
    
  )
}

export default layout
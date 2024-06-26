'use client'
import React,{useState} from 'react'
import styles from './hidePerson.module.css'
import { Input } from '@mui/material'
const page = () => {
  const [name,setName] = useState('')
  const  handleName =(e)=>{
    setName(e.target.value)
  }
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Ẩn Kỷ niệm về mọi người</h4>
      <p className={styles.content}>Hãy cho biết bạn không muốn thấy ai trong kỷ niệm của mình. Chúng tôi sẽ không gửi thông báo cho họ.</p>
      <input  placeholder='Bắt đầu nhập tên' value={name} onChange={handleName}/>
      <button className={`${name !== "" ? styles.active : ''}`}>Lưu</button>
    </div>
  )
}

export default page
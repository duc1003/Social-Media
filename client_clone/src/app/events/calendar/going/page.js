import React from 'react'
import styles from './going.module.css'
import eventCanface from '../../../../assets/eventCanface.png'
import Image from 'next/image'
const page = () => {
  return (
    <div className={styles.container}>
      <Image src={eventCanface} width={200} height={"auto"} alt='can' />
      <p>Sự kiện bạn tham gia sẽ hiển thị ở đây</p>
    </div>
  )
}

export default page
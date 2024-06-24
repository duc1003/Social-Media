import React from 'react'
import styles from './notification.module.css'
const page = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Notifications</h4>
      <p className={styles.content}>Bạn có thể chọn tần suất nhận thông báo về kỷ niệm của mình</p>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h5>Tất cả kỷ niệm</h5>
          <p>Chúng tôi chỉ thông báo 1 lần mỗi ngày</p>
        </div>
        <div className={styles.cardButton}>
          <input type="radio" id="radio1" name="custom-radio"/>
          <label htmlFor="radio1"></label>
        </div>
        <hr/>
      </div>

      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h5>Tất cả kỷ niệm</h5>
          <p>Chúng tôi chỉ thông báo 1 lần mỗi ngày</p>
        </div>
        <div className={styles.cardButton}>
          <input type="radio" id="radio2" name="custom-radio"/>
          <label htmlFor="radio2"></label>
        </div>
        <hr/>
      </div>

      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h5>Tất cả kỷ niệm</h5>
          <p>Chúng tôi chỉ thông báo 1 lần mỗi ngày</p>
        </div>
        <div className={styles.cardButton}>
          <input type="radio" id="radio3" name="custom-radio"/>
          <label htmlFor="radio3"></label>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default page
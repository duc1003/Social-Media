import React from 'react'
import styles from './birthdays.module.css'
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxBirthday}>
            <p className={styles.month}>Tháng 6</p>
            <p className={styles.person}>
              Hoàng Kim Thịnh <span>và 6 người khác</span>
            </p>
            <div className={styles.birthday}>
              <div className={styles.avatar}>
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
    </div>
  )
}

export default page
import React from 'react'
import styles from "./comment.module.css"
import Image from 'next/image'
export default function Comment() {
  return (
    <>
    <div className={styles.container}>
          <div className={styles.containerImg}>
            <Image
              width={40}
              height={40}
              src={
                "https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
              }
            />
          </div>
          <div className={styles.conteinerContent}>
            <div className={styles.name}>John doe</div>
            <div className={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam
            </div>
          </div>
        </div>

    </>
  )
}

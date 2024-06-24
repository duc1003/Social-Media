import React from 'react'
import styles from "./yourGroup.module.css"
import Header from "../../../Components/header/Header"
import LeftBar from "../LeftBar"
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import ButtonCustom from '../../../Components/Button/ButtonCustom'
export default function yourGroupPage() {
  return (
    <div className={styles.container}>
    <Header/>
    <div className={styles.wrapper}>
      <LeftBar/>
      <div className={styles.content}>
        <div className={styles.home}>
        <div className={styles.title}>Tất cả các nhóm của bạn đã tham gia (159)</div>

        <div className={styles.containerContent}>
          <div className={styles.contentWrap}>
            <div className={styles.discoverGroup}>
            <span className={styles.icon}><CloseIcon/></span>
            <Image
              width={70}
              height={70}
              src={"https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"}
              alt='theme'
              className={styles.img}
            />
            <div className={styles.text}>
              <h3 className={styles.title}>Thực hành giao tiếp tiếng anh</h3>
              <div className={styles.desc}>
                <h4>270k thanh vien</h4>
                <h4>.</h4>
                <h4>6 bài viết</h4>
              </div>
            </div>
            </div>

            <ButtonCustom
            border='none'
            width='90%'
            height='36px'
            textColor='var(--black)'
            color='var(--lightGray)'
            textAlign='center'
            children = "Xem nhom"
            radius='6px'
            cursor='pointer'
            fontSize='18px'
          />

          </div>
          <div className={styles.contentWrap}>
            <div className={styles.discoverGroup}>
            <span className={styles.icon}><CloseIcon/></span>
            <Image
              width={70}
              height={70}
              src={"https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"}
              alt='theme'
              className={styles.img}
            />
            <div className={styles.text}>
              <h3 className={styles.title}>Thực hành giao tiếp tiếng anh</h3>
              <div className={styles.desc}>
                <h4>270k thanh vien</h4>
                <h4>.</h4>
                <h4>6 bài viết</h4>
              </div>
            </div>
            </div>

            <ButtonCustom
            border='none'
            width='90%'
            height='36px'
            textColor='var(--black)'
            color='var(--lightGray)'
            textAlign='center'
            children = "Xem nhom"
            radius='6px'
            cursor='pointer'
            fontSize='18px'
          />

          </div>
          <div className={styles.contentWrap}>
            <div className={styles.discoverGroup}>
            <span className={styles.icon}><CloseIcon/></span>
            <Image
              width={70}
              height={70}
              src={"https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"}
              alt='theme'
              className={styles.img}
            />
            <div className={styles.text}>
              <h3 className={styles.title}>Thực hành giao tiếp tiếng anh</h3>
              <div className={styles.desc}>
                <h4>270k thanh vien</h4>
                <h4>.</h4>
                <h4>6 bài viết</h4>
              </div>
            </div>
            </div>

            <ButtonCustom
            border='none'
            width='90%'
            height='36px'
            textColor='var(--black)'
            color='var(--lightGray)'
            textAlign='center'
            children = "Xem nhom"
            radius='6px'
            cursor='pointer'
            fontSize='18px'
          />

          </div>

        </div>

        </div>
      </div>
    </div>
  </div>
  )
}

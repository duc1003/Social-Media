import React from 'react'
import styles from "./discover.module.css"
import Header from "../../../Components/header/Header"
import LeftBar from "../LeftBar"
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import ButtonCustom from '../../../Components/Button/ButtonCustom'
export default function discoverPage() {
  return (
    <div className={styles.container}>
    <Header/>
    <div className={styles.wrapper}>
      <LeftBar/>
      <div className={styles.content}>
        <div className={styles.home}>
        <div className={styles.title}>Nhóm phổ biến ở gần bạn</div>

        <div className={styles.containerContent}>
          <div className={styles.discoverGroup}>
            <span className={styles.icon}><CloseIcon/></span>
            <Image
              width={334}
              height={187}
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

          <ButtonCustom
            border='none'
            width='90%'
            height='36px'
            margin='30px auto 10px auto'
            textColor='var(--black)'
            color='var(--lightGray)'
            textAlign='center'
            children = "Tham gia nhom"
            radius='6px'
            cursor='pointer'
          />
          </div>
          <div className={styles.discoverGroup}>
            <span className={styles.icon}><CloseIcon/></span>
            <Image
              width={334}
              height={187}
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

          <ButtonCustom
            border='none'
            width='90%'
            height='36px'
            margin='30px auto 10px auto'
            textColor='var(--black)'
            color='var(--lightGray)'
            textAlign='center'
            children = "Tham gia nhom"
            radius='6px'
            cursor='pointer'
          />
          </div>
          <div className={styles.discoverGroup}>
            <span className={styles.icon}><CloseIcon/></span>
            <Image
              width={334}
              height={187}
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

          <ButtonCustom
            border='none'
            width='90%'
            height='36px'
            margin='30px auto 10px auto'
            textColor='var(--black)'
            color='var(--lightGray)'
            textAlign='center'
            children = "Tham gia nhom"
            radius='6px'
            cursor='pointer'
          />
          </div>
        </div>


        <div className={styles.containerContent}>
          <div className={styles.discoverGroup}>
            <span className={styles.icon}><CloseIcon/></span>
            <Image
              width={334}
              height={187}
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

          <ButtonCustom
            border='none'
            width='90%'
            height='36px'
            margin='30px auto 10px auto'
            textColor='var(--black)'
            color='var(--lightGray)'
            textAlign='center'
            children = "Tham gia nhom"
            radius='6px'
          />
          </div>
          <div className={styles.discoverGroup}>
            <span className={styles.icon}><CloseIcon/></span>
            <Image
              width={334}
              height={187}
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

          <ButtonCustom
            border='none'
            width='90%'
            height='36px'
            margin='30px auto 10px auto'
            textColor='var(--black)'
            color='var(--lightGray)'
            textAlign='center'
            children = "Tham gia nhom"
            radius='6px'
          />
          </div>
          <div className={styles.discoverGroup}>
            <span className={styles.icon}><CloseIcon/></span>
            <Image
              width={334}
              height={187}
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

          <ButtonCustom
            border='none'
            width='90%'
            height='36px'
            margin='30px auto 10px auto'
            textColor='var(--black)'
            color='var(--lightGray)'
            textAlign='center'
            children = "Tham gia nhom"
            radius='6px'
            cursor='pointer'
          />
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

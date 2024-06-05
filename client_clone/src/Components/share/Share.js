import React from 'react'
import styles from './share.module.css'
import Images from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import Image from 'next/image'
const Share = () => {

  return (
    <div className={styles.share}>
      <div className={styles.container}>
        <div className={styles.top}>
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
            alt=""
          />
          <input type="text" placeholder={`What's on your mind Thịnh?`} />
        </div>
        <hr />
        <div className={styles.bottom}>
          <div className={styles.left}>
            <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className={styles.item}>
                <Image src={Images} alt="" width = {20} height = {20}/>
                <span>Add Image</span>
              </div>
            </label>
            <div className={styles.item}>
              <Image src={Map} alt="" width = {20} height = {20}/>
              <span>Add Place</span>
            </div>
            <div className={styles.item}>
              <Image src={Friend} alt="" width = {20} height = {20} />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className={styles.right}>
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;

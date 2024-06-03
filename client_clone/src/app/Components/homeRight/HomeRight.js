import React from "react";
import Image from "next/image";
import styles from "./homeRight.module.css";
export default function HomeRight() {
  return (
    <>
      <div>
        <div className={styles.div}>
          <ul className={styles.ul}>
            <h3 className={styles.title}>Suggestions For You</h3>
            <li className={styles.li}>
              <div className={styles.liLeft}>
                <Image
                  src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                  className={styles.img}
                />
                <h3 className={styles.name}>Jong Doe</h3>
              </div>
              <div className={styles.liRight}>
                <button className={styles.buttonBlue}>follow</button>
                <button className={styles.buttonRed}>dismiss</button>
              </div>
            </li>
            <li className={styles.li}>
              <div className={styles.liLeft}>
                <Image
                  src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                  className={styles.img}
                />
                <h3 className={styles.name}>Jong Doe</h3>
              </div>
              <div className={styles.liRight}>
                <button className={styles.buttonBlue}>follow</button>
                <button className={styles.buttonRed}>dismiss</button>
              </div>
            </li>
            <li className={styles.li}>
              <div className={styles.liLeft}>
                <Image
                  src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                  className={styles.img}
                />
                <h3 className={styles.name}>Jong Doe</h3>
              </div>
              <div className={styles.liRight}>
                <button className={styles.buttonBlue}>follow</button>
                <button className={styles.buttonRed}>dismiss</button>
              </div>
            </li>
          </ul>
          <ul className={styles.ul}>
            <h3 className={styles.title}>Online Friends</h3>
            <li className={styles.li}>
              <div className={styles.liLeft}>
                <div className={styles.imageContainer}>
                  <Image
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                    className={styles.img}
                  />
                  <span className={styles.status}></span>
                </div>
                <h3 className={styles.name}>Jong Doe</h3>
              </div>
            </li>
            <li className={styles.li}>
              <div className={styles.liLeft}>
                <div className={styles.imageContainer}>
                  <Image
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                    className={styles.img}
                  />
                  <span className={styles.status}></span>
                </div>
                <h3 className={styles.name}>Jong Doe</h3>
              </div>
            </li>
            <li className={styles.li}>
              <div className={styles.liLeft}>
                <div className={styles.imageContainer}>
                  <Image
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    width={40}
                    height={40}
                    alt="Picture of the author"
                    className={styles.img}
                  />
                  <span className={styles.status}></span>
                </div>
                <h3 className={styles.name}>Jong Doe</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

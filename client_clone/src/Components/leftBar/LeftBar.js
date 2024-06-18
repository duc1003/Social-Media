"use client"
import React from 'react'
import styles from './leftBar.module.css'
import Image from 'next/image'
import friends from '../../assets/1.png'
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png"   ;
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
const LeftBar = () => {
    const router = useRouter()
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.menu}>
                <div className = {styles.user}>
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg" alt=""/>
                    <span>Hoàng Kim Thịnh</span>
                </div>
                <Link href={"/friends"} className = {styles.item}>  
                    <Image src= {friends} alt="" width={30} height={30}/>
                    <span>Friends</span>
                </Link>
                <Link  href={"/groups"} className = {styles.item}>
                    <Image src= {Groups} alt="" width={30} height={30}/>
                    <span>Groups</span>
                </Link>

                <div className = {styles.item}>
                    <Image src= {Market} alt="" width={30} height={30}/>
                    <span>Market</span>
                </div>
                <div className = {styles.item}>
                    <Image src= {Watch} alt="" width={30} height={30}/>
                    <span>Watch</span>
                </div>
                <Link href={"/memories"} className = {styles.item}>
                    <Image src= {Memories} alt="" width={30} height={30}/>
                    <span>Memories</span>
                </Link>
            </div>
            <hr/>
            <div className={styles.menu}>
                <span>Yours Shortcuts</span>
                <Link href={"/events"} className = {styles.item}>
                    <Image src= {Events} alt="" width={30} height={30}/>
                    <span>Events</span>
                </Link>
                <div className = {styles.item}>
                    <Image src= {Gaming} alt="" width={30} height={30}/>
                    <span>Gaming</span>
                </div>
                <div className = {styles.item}>
                    <Image src= {Gallery} alt="" width={30} height={30}/>
                    <span>Gallery</span>
                </div>
                <div className = {styles.item}>
                    <Image src= {Videos} alt="" width={30} height={30}/>
                    <span>Videos</span>
                </div>
                <div className = {styles.item}>
                    <Image src= {Messages} alt="" width={30} height={30}/>
                    <span>Messages</span>
                </div>
            </div>
            <hr/>
            <div className={styles.menu}>
                <span>Other</span>
                <div className = {styles.item}>
                    <Image src= {Tutorials} alt="" width={30} height={30}/>
                    <span>Tutorials</span>
                </div>
                <div className = {styles.item}>
                    <Image src= {Courses} alt="" width={30} height={30}/>
                    <span>Courses</span>
                </div>
                <div className = {styles.item}>
                    <Image src= {Fund} alt="" width={30} height={30}/>
                    <span>Fundraiser</span>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default LeftBar
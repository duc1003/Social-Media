"use client"
import React from 'react'
import { useSearchParams, usePathname } from "next/navigation";
import Image from 'next/image';
import { useState, useEffect } from "react";

import styles from "./groupDetail.module.css"
import PublicIcon from '@mui/icons-material/Public';
import GroupsIcon from '@mui/icons-material/Groups';
import ReplyIcon from '@mui/icons-material/Reply';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

import ButtonCustom from '../../../Components/Button/ButtonCustom';
import Header from "../../../Components/header/Header"
import Popover from "../../../Components/popover/Popover"
import Share from '../../../Components/share/Share';
import Posts from '../../../Components/posts/Posts';
export default function page({params}) {
    const dataPopover = [
        {id :1, title : "Rời nhóm", icon: <LogoutIcon/>},
    
      ]
    const [popoverOpen, setPopoverOpen] = useState(false);
    const { id } = params;
  return (
    <div className={styles.wrapper}>
            <Header/>
            <div className={styles.header}>
                <div className={styles.wrapperHeader}>
                <Image 
                    src={"https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/329161808_926753658339099_7339899542661212301_n.png?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ElOId4fJMFgQ7kNvgGHz6B6&_nc_ht=scontent.fsgn2-8.fna&oh=00_AYDTvPbUgDE4ZFQGj1V3rcE0H-r_jA4Apr_nJss2yc9Dqw&oe=667EBEA5"}
                    height={400}
                    width={940}
                    className={styles.image}
                />
                <div className={styles.titleGroup}>
                    <div className={styles.rightTitle}>
                        <h2 className={styles.nameGroup}>Việc làm Sinh Viên Part-time | Full-time | Internship TP.HCM</h2>
                        <div className={styles.desc}>
                            <span><PublicIcon/></span>
                            <h4>Nhom cong khai</h4>
                            <h4>500k</h4>
                        </div>
                    </div>
                    <div className={styles.leftTitle}> 
                            <ButtonCustom
                                width='170px'
                                height='36px'
                                radius='6px'
                                cursor='pointer'
                                textAlign = 'center'
                                textColor= 'var(--white)'
                                color='var(--blueGreen)'
                                display='flex'
                                alignItems='center'
                                justifyContent='space-around'
                                border='none'
                               
                        >
                            <GroupsIcon/> Nhóm đã tham gia
                        </ButtonCustom>
                        <ButtonCustom
                                width='100px'
                                height='36px'
                                radius='6px'
                                cursor='pointer'
                                textAlign = 'center'
                                textColor= 'var(--black)'
                                color='var(--lightGray)'
                                display='flex'
                                alignItems='center'
                                justifyContent='space-around'
                                border='none'
                               
                        >
                            <ReplyIcon/> Chia sẻ
                        </ButtonCustom>
                        <div className={styles.popoverWrapper}>
                            <span className={styles.popoverButton} onClick={() => setPopoverOpen(!popoverOpen)}><ArrowDropDownIcon /></span>
                            {popoverOpen ? <Popover dataPopover={dataPopover}/> : <></>}
         
                        </div>
                        
                    </div>

                </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.share}>
                    <Share/>
                    </div>
                    <Posts/>
                </div>
                <div className={styles.intro}>
                    <h3 className={styles.introText}>Giới thiệu</h3>
                    <p className={styles.introPara}>Nơi dành cho các bạn sinh viên tìm kiếm việc làm, nơi thực tập đáng tin cậy và nhà tuyển dụng tìm được những ứng viên đúng mong muốn.
                    QUAN TRỌNG HƠN! Hãy cùng xây dựng nhóm với nhau để tránh những trường hợp lừa đảo, đa cấp nhé! Ẩn bớt</p>
                    <div className={styles.iconDesc}>
                        <span><PublicIcon/></span>
                        <div className={styles.text}>
                            <h3>Công khai</h3>
                            <p>Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng.</p>
                        </div>
                    </div>
                    <div className={styles.iconDesc}>
                        <span><RemoveRedEyeIcon/></span>
                        <div className={styles.text}>
                            <h3>Hiển thị</h3>
                            <p>Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng.</p>
                        </div>
                    </div>
                    <div className={styles.iconDesc}>
                        <span><FmdGoodIcon/></span>
                        <div className={styles.text}>
                            <h3>Công khai</h3>
                            <p>Bất kỳ ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng.</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>

  )
}

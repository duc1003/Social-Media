import React from 'react'
import styles from './profileDetail.module.css'
import Header from '../../../Components/header/Header'
import pictureProfile from "../../../assets/anhprofile.jpg"
import avatarProfile from "../../../assets/profileAvatar.jpg"
import Image from 'next/image'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Post from '../../../Components/post/Post'
import Posts from '../../../Components/posts/Posts'
const page = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.wrapper}>
            <div className={styles.profile}>
                <div className={styles.img}>
                    <Image src= {pictureProfile} width={900} height={220} alt='' priority/>
                </div>
                <div className={styles.contact}>
                    <div className={styles.profileName}>
                        <h4>Dasha Taran</h4>
                    </div>
                    <div className={styles.profileContact}>
                        <div className={styles.profilePadding}>
                            <div className={styles.profileSocial}>
                                <FacebookIcon className={styles.profileIcon}/>
                                <InstagramIcon className={styles.profileIcon}/>
                                <TwitterIcon className={styles.profileIcon}/>
                                <LinkedInIcon className={styles.profileIcon}/>
                                <PinterestIcon className={styles.profileIcon}/>
                            </div>
                            <div className={styles.profileWorld}>
                                <div className={styles.world}>
                                    <LocationOnIcon className={styles.profileIcon}/>
                                    <p>Russia</p>
                                </div>
                                <div className={styles.world}>
                                    <LanguageIcon className={styles.profileIcon}/>
                                    <p>facebook.com</p>
                                </div>
                            </div>
                            <div className={styles.profileLetter}>
                                <EmailIcon className={styles.profileIcon}/>
                                <MoreHorizIcon className={styles.profileIcon}/>
                            </div>
                        </div>
                    </div>
                    <button className={styles.profileAdd}>Thêm bạn bè</button>
                </div>
                <div className={styles.avatar}>
                    <Image src={avatarProfile} width={150} height={150} alt='' priority />
                </div>
                <Posts/>
            </div>
        </div>
    </div>
  )
}

export default page
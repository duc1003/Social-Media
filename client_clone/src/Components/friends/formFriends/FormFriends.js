import React from 'react'
import styles from './formFriends.module.css'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import ClearIcon from '@mui/icons-material/Clear';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Link from 'next/link';

export default function FormFriends({active}) {
  return (
    <ul className={`${styles.wrapper} ${active ? styles.active : ''}`}>
        
        <li className={styles.li}>
            <span className={styles.icon}><ClearIcon/></span>
            <Link href="/"  className={styles.title}>Xóa following</Link>
        </li>
        <li className={styles.li}>
            <span className={styles.icon}><ReportProblemIcon/></span>
            <Link href="/"  className={styles.title}>Chặn người dùng</Link>
        </li>
    </ul>
  )
}

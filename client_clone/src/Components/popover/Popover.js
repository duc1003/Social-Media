import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import ClearIcon from '@mui/icons-material/Clear';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import styles from "./popover.module.css";
import Link from 'next/link';

export default function Popover() {
  return (
    <ul className={styles.wrapper}>
        <li className={styles.li}>
            <span className={styles.icon}><BookmarkIcon/></span>
            <Link href="/" className={styles.title}>Lưu bài viết </Link>
        </li>
        <li className={styles.li}>
            <span className={styles.icon}><NotificationsIcon/></span>
            <Link href="/"  className={styles.title}>Bật thông báo về bài viết này</Link>
        </li>
        <li className={styles.li}>
            <span className={styles.icon}><GppMaybeIcon/></span>
            <Link href="/"  className={styles.title}>Báo cáo với quản trị viên nhóm</Link>
        </li>
        <li className={styles.li}>
            <span className={styles.icon}><ClearIcon/></span>
            <Link href="/"  className={styles.title}>Ẩn bài viết</Link>
        </li>
        <li className={styles.li}>
            <span className={styles.icon}><ReportProblemIcon/></span>
            <Link href="/"  className={styles.title}>Báo cáo bài viết</Link>
        </li>
    </ul>
  )
}

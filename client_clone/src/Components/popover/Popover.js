import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ClearIcon from '@mui/icons-material/Clear';
import styles from "./popover.module.css";
import ButtomCustom from "../Button/ButtonCustom"
import Link from 'next/link';

export default function Popover({dataPopover}) {
    console.log(dataPopover);
  return (
    <ul className={styles.wrapper}>
        {dataPopover.map((data) =>(
        <li className={styles.li} key={data.id}>
        <ButtomCustom
            width='100%'
            border='none'
            color='var(--white)'
            textAlign='start'
            margin='4px 2px'
            display='flex'
            alignItems='center'
            cursor='pointer'
            padding = '8px'
            fontSize='15px'
        >
        <span className={styles.icon}>{data.icon}</span>
        {data.title}  
        </ButtomCustom>
        
    </li>
        ))}


    </ul>
  )
}

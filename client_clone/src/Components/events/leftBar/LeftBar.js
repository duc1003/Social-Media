"use client";
import React, { useState, useEffect } from "react";
import styles from "./leftBar.module.css";
import Link from "next/link";
import FuncFriends from "../../friends/funcFriends/FuncFriends";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import CakeIcon from "@mui/icons-material/Cake";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from '@mui/icons-material/Check';
import EmailIcon from '@mui/icons-material/Email';
import StarIcon from '@mui/icons-material/Star';
import HouseIcon from '@mui/icons-material/House';
import {usePathname} from 'next/navigation'
const LeftBar = ({onButtonClick}) => {
  const pathName = usePathname()
  const [openPopper, setOpenPopper] = useState(false);

  const handlePopper = () => {
    setOpenPopper(!openPopper);
  };

  return (
    <div className={styles.container}>
      <div className={styles.boxTitle}>
        <h4>Sự kiện</h4>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.input}
            placeholder="Tìm kiếm bạn bè"
          />
          <SearchIcon className={styles.searchIcon} />
        </div>
      </div>
      <div className={styles.card}>
        <Link href="/events" className={styles.memoriesLink}>
          <FuncFriends
            icon={<CalendarMonthIcon />}
            title="Trang chủ"
            active={pathName === "/events"}
          />
        </Link>
        <Link href="/events/calendar" className={styles.memoriesLink}>
          <FuncFriends
            icon={<PersonIcon />}
            title="Sự kiện của bạn"
            active={pathName === "/events/calendar"}
            onClick={() => handlePopper()}
          />
        </Link>
        {openPopper ? (
          <div className={styles.popper}>
            <Link href="/events/calendar/going" className={styles.memoriesLink}>
              <FuncFriends
                icon={<CheckIcon />}
                title="Sẽ tham gia"
                active={pathName === "/events/calendar/going"}
                son={true}
              />
            </Link>
            <Link href="/events/calendar/letters" className={styles.memoriesLink}>
              <FuncFriends
                icon={<EmailIcon />}
                title="Thư mời"
                active={pathName === "/events/calendar/letters"}
                son={true}
              />
            </Link>
            <Link href="/events/calendar/care" className={styles.memoriesLink}>
              <FuncFriends
                icon={<StarIcon />}
                title="Quan tâm"
                active={pathName === "/events/calendar/care"}
                son={true}
              />
            </Link>
            <Link href="/events/calendar/organization" className={styles.memoriesLink}>
              <FuncFriends
                icon={<HouseIcon />}
                title="Tổ chức"
                active={pathName === "/events/calendar/organization"}
                son={true}
              />
            </Link>
          </div>
        ) : (
          <div></div>
        )}
        <Link href="/events/birthdays" className={styles.memoriesLink}>
          <FuncFriends
            icon={<CakeIcon />}
            title="Sinh Nhật"
            active={pathName === "/events/birthdays"}
          />
        </Link>
        <Link href="/events/notifications" className={styles.memoriesLink}>
          <FuncFriends
            icon={<NotificationsIcon />}
            title="Thông báo"
            active={pathName === "/events/notifications"}
          />
        </Link>
        <div className={styles.addEvent}>
          <button onClick={onButtonClick}>+ Tạo sự kiện mới</button>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

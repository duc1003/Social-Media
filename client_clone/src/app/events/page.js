"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./events.module.css";
import BoxEvent from '../../Components/events/boxEvent/BoxEvent'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from '@mui/icons-material/Search';
import NearMeIcon from '@mui/icons-material/NearMe';
import LanguageIcon from '@mui/icons-material/Language';
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

export default function Events() {
  const [value, setValue] = useState(dayjs("2022-04-17"));
  const [closeCalendar, setCloseCalendar] = useState(false);
  const [openPopper, setOpenPopper] = useState(false);
  
  const calendarRef = useRef(null);
  const popperRef = useRef(null);

  const handleOpenCalendar = () => {
    setCloseCalendar(!closeCalendar);
  };

  const handleOpenPopper = () => {
    setOpenPopper(!openPopper);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setCloseCalendar(false);
      }
      if (popperRef.current && !popperRef.current.contains(event.target)) {
        setOpenPopper(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.homeContent}>
        <h4 className={styles.homeTitle}>Khám phá sự kiện</h4>
        <div className={styles.boxFilter}>
          <div className={styles.filter} onClick={handleOpenPopper}>
            <LocationOnIcon className={styles.filterIcon} />
            <p>Vị trí của tôi</p>
          </div>
          {openPopper ? (
            <div ref={popperRef} className={styles.filterLocation}>
              <div className={styles.search}>
                <input type="text" className={styles.input} placeholder = "Tìm kiếm theo thành phố" checked = {true}/>
                <SearchIcon className={styles.searchIcon}/>
              </div>
              <div className={styles.filterRadio}>
                <label htmlFor="filterRadio1" className={styles.boxInputLocation}>
                  
                  <label htmlFor="filterRadio1">
                    <NearMeIcon/>
                    <p>Vị trí của tôi</p>
                  </label>
                  <input type="radio" id="filterRadio1" style={{ width: "18px" }} name="filterRadio1" />
                </label>
                <hr/>
                <label htmlFor="filterRadio2" className={styles.boxInputLocation} style={{ margin: "0" }}>
                  
                  <label htmlFor="filterRadio2">
                    <LanguageIcon/>
                    <p>Online</p>
                  </label>
                  <input type="radio" id="filterRadio2" style={{ width: "18px" }} name="filterRadio1" />
                </label>
                
              </div>
            </div>
          ) : (
            <div className={styles.noneDiv}></div>
          )}
          <div className={styles.filter} onClick={handleOpenCalendar}>
            <CalendarMonthIcon className={styles.filterIcon} />
            <p>Ngày bất kỳ</p>
          </div>
          {closeCalendar ? (
            <div ref={calendarRef} className={styles.calendar}>
              <DateCalendar
                value={value}
                onChange={(newValue) => {
                  console.log(newValue);
                  setValue(newValue);
                }}
                className={styles.calendarDay}
              />
              <button
                onClick={() => setCloseCalendar(false)}
                className={styles.buttonCalendar}
              >
                Áp dụng
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className={styles.boxEvent}>
          <BoxEvent/>
          <BoxEvent/>
          <BoxEvent/>
          <BoxEvent/>
          <BoxEvent/>
          <BoxEvent/>
          <BoxEvent/>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import styles from "./boxEvent.module.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const BoxEvent = ({ id }) => {
  const popperRef = useRef(null);
  const [openPopper, setOpenPopper] = useState(false);
  const [buttonQT, setButtonQT] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popperRef.current && !popperRef.current.contains(event.target)) {
        setOpenPopper(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setButtonQT(true);
  };

  const handleQuanTamClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOpenPopper(true);
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setButtonQT(false);
    setOpenPopper(false);
  };

  return (
    <Link href={`/events/${id}`} className={styles.container} >
      <div className={styles.img}>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg" />
      </div>
      <div className={styles.content}>
        <p>CN, 30 THÁNG 6 LÚC 20:00</p>
        <h5>NGỦ TẬP THỂ TẠI CHÂN CẦU</h5>
        <p>CẦU SÀI GÒN</p>
        <p>1 tr người quan tâm - 900k người sẽ tham gia</p>
      </div>
      <div className={styles.button}>
        {buttonQT ? (
          <button
            className={styles.buttonSecond}
            onClick={handleQuanTamClick}
          >
            <StarBorderIcon />
            Quan tâm
          </button>
        ) : (
          <button
            className={styles.buttonFirst}
            onClick={handleButtonClick}
          >
            <StarBorderIcon />
            Quan tâm
          </button>
        )}
      </div>
      {openPopper ? (
        <div
          ref={popperRef}
          className={styles.filterLocation}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.filterRadio}>
            <label htmlFor="filterRadio1" className={styles.boxInputLocation}>
              <StarBorderIcon />
              <p>Quan tâm</p>
              <input
                type="radio"
                id="filterRadio1"
                style={{ width: "18px" }}
                name="filterRadio1"
              />
            </label>
            <label
              htmlFor="filterRadio2"
              className={styles.boxInputLocation}
              style={{ margin: "0" }}
            >
              <CheckIcon />
              <p>Sẽ tham gia</p>
              <input
                type="radio"
                id="filterRadio2"
                style={{ width: "18px" }}
                name="filterRadio1"
              />
            </label>
            <label
              htmlFor="filterRadio3"
              className={styles.boxInputLocation}
              style={{ margin: "0" }}
              onClick={handleCloseClick}
            >
              <CloseIcon />
              <p>Không quan tâm</p>
              <input
                type="radio"
                id="filterRadio3"
                style={{ width: "18px" }}
                name="filterRadio1"
              />
            </label>
          </div>
        </div>
      ) : (
        <div className={styles.noneDiv}></div>
      )}
    </Link>
  );
};

export default BoxEvent;

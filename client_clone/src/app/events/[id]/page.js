"use client";
import React, { useState } from "react";
import styles from "./id.module.css";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EmailIcon from "@mui/icons-material/Email";
import Invite from "../../../Components/events/invite/Invite";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import Posts from "../../../Components/posts/Posts";
import Share from "../../../Components/share/Share";
const page = ({ params }) => {
  const fullText = `
    ->Đây là hoạt động đầy thú vị trong thời điểm diễn ra các hoạt động bóng đá
    ->Nơi chúng ta có thể sống sau mùa cá cược sôi động
    ->Hoặc nơi chúng ta nghỉ ngơi sau khi bị đuổi
    ->Bạn muốn tham gia cùng chúng tôi
    ->Ngại gì mà không thử và không tham gia
    ->Chúng tôi luôn chào đón các bạn ^^
  `;
  const path = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const shortText = fullText.split(" ").slice(0, 20).join(" ") + "...";
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  const formatText = (text) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  const { id } = params;
  const pathName = useSearchParams();
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  const handleActive2 = () => {
    setActive2(!active2);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgHeader}>
          <div className={styles.imgBox}>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
              alt="imgTitle"
            />
          </div>
        </div>
        <div className={styles.titleHeader}>
          <div className={styles.boxTitle}>
            <h5>CHỦ NHẬT, 30 THÁNG 6, 2024 VÀO 20:00</h5>
            <h2>NGỦ TẬP THỂ TẠI CHÂN CẦU</h2>
            <p>Cầu Sài Gòn</p>
            <hr />
          </div>
        </div>
        <div className={styles.boxNav}>
          <div className={styles.nav}>
            <div className={styles.linkHeader}>
              <Link
                className={`${styles.link} ${
                  pathName.get("active_tab") === "about" ? styles.active : ""
                }`}
                href={`/events/${id}?active_tab=about`}
              >
                <p>Giới thiệu</p>
              </Link>
              <Link
                className={`${styles.link} ${
                  pathName.get("active_tab") === "discussion"
                    ? styles.active
                    : ""
                }`}
                href={`/events/${id}?active_tab=discussion`}
              >
                <p>Thảo luận</p>
              </Link>
            </div>
            <div className={styles.event}>
              <div
                className={`${styles.boxEvent} ${active ? styles.active : ""}`}
                onClick={handleActive}
              >
                <StarBorderIcon />
                <p>Quan tâm</p>
              </div>
              <div
                className={`${styles.boxEvent} ${
                  active2 ? styles.active2 : ""
                }`}
                onClick={handleActive2}
              >
                <CheckCircleOutlineIcon />
                <p>Sẽ tham gia</p>
              </div>
              <div className={styles.boxEvent} onClick={handleOpen}>
                <EmailIcon />
                <p>Mời</p>
              </div>
            </div>
          </div>
        </div>
        {(pathName.get("active_tab") === "about" || path === `/events/${id}`) &&
        pathName.get("active_tab") !== "discussion" ? (
          <div className={styles.info}>
            <div className={styles.about}>
              <h5>Chi tiết</h5>
              <span className={styles.answer}>
                <GroupIcon className={styles.aboutIcon} />
                1000 người đã trả lời
              </span>
              <span className={styles.answer}>
                <PersonIcon className={styles.aboutIcon} />
                Sự kiện của<strong> Hoàng Kim Thịnh</strong>
              </span>
              <span className={styles.answer}>
                <LocationOnIcon className={styles.aboutIcon} />
                Chân cầu Sài Gòn
              </span>
              <span className={styles.answer}>
                <PublicIcon className={styles.aboutIcon} />
                Công khai
              </span>
              <div className={styles.desc}>
                <p>
                  {isExpanded ? formatText(fullText) : formatText(shortText)}
                </p>
                <span onClick={toggleText}>
                  {isExpanded ? "Ẩn bớt" : "Xem thêm"}
                </span>
              </div>
            </div>
            <div className={styles.guest}>
              <h4>Khách mời</h4>
              <div className={styles.guestInfo}>
                <span>
                  1000
                  <p>Sẽ tham gia</p>
                </span>
                <span>
                  10000
                  <p>Quam tâm</p>
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {/* discuss */}
        {(pathName.get("active_tab") === "discussion") &&
        pathName.get("active_tab") !== "about" ? (
          <div className={styles.info}>
            <div className={styles.boxDiscussInfo}>
              <Share/>
              <h5 className={styles.discussInfoTitle}>Hoạt động mới đây</h5>
              <Posts/>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <Invite open={open} handleClose={handleClose} />
    </div>
  );
};

export default page;

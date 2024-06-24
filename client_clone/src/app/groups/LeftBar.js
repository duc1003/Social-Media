"use client";
import React from "react";
import styles from "./leftbarGroup.module.css";
import Image from "next/image";
import ButtonCustom from "../../Components/Button/ButtonCustom";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import FeedIcon from "@mui/icons-material/Feed";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const LeftBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [stateCreate, setStateCreate] = useState(false);

  useEffect(() => {
    if (pathname === "/groups/create") {
      setStateCreate(!stateCreate);
    }
  }, [pathname]);
  return (
    <div className={styles.container}>
      {stateCreate ? (
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2 className={styles.headerTitle}>Tạo Nhóm</h2>
          </div>
          <div>
            <div className={styles.user}>
              <div className={styles.userInfo}>
                <Image
                  src={
                    "https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                  }
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userInfoImg}
                />
                <div className={styles.details}>
                  <Link href={"/#"}>
                    <span className={styles.name}>{"John Doe"}</span>
                  </Link>
                  <span className={styles.role}> quản trị viên</span>
                </div>
              </div>
            </div>
          </div>
          <div >
            <form className={styles.menu}>
              <div className={styles.inputField}>
                <input type="text" name="name" placeholder="Tên nhóm" />
                <select name="pets" id="pet-select">
                  <option value="">--Chọn quyền riêng tư--</option>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
                <input type="text" name="name" placeholder="Mời bạn bè" />
              </div>

              <ButtonCustom
                height="36px"
                width="90%"
                margin="auto"
                border="none"
                color="var(--lightGray)"
                textColor="var(--black)"
                textAlign="center"
                radius="6px"
                children="Tạo nhóm"
              />
            </form>
          </div>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2 className={styles.headerTitle}>Nhóm</h2>
            <span className={styles.headerIcon}>
              <SettingsIcon />
            </span>
          </div>
          <div className={styles.search}>
            <ButtonCustom fontSize="14px" border="none" cursor="pointer">
              {<SearchOutlinedIcon />}
            </ButtonCustom>
            <input type="text" placeholder="Search..." />
          </div>
          <div className={styles.menu}>
            <Link
              href={"/groups/feed"}
              className={`link ${
                pathname === "/groups/feed"
                  ? `${styles.activeItem}`
                  : `${styles.item}`
              }`}
            >
              <span
                className={`link ${
                  pathname === "/groups/feed"
                    ? `${styles.activeIcon}`
                    : `${styles.icon}`
                }`}
              >
                <FeedIcon />
              </span>
              <span className={styles.text}>Bảng feed của bạn</span>
            </Link>

            <Link
              href={"/groups/discover"}
              className={`link ${
                pathname === "/groups/discover"
                  ? `${styles.activeItem}`
                  : `${styles.item}`
              }`}
            >
              <span
                className={`link ${
                  pathname === "/groups/discover"
                    ? `${styles.activeIcon}`
                    : `${styles.icon}`
                }`}
              >
                <ExploreIcon />
              </span>
              <span className={styles.text}>Bảng feed của bạn</span>
            </Link>

            <Link
              href={"/groups/yourGroups"}
              className={`link ${
                pathname === "/groups/yourGroups"
                  ? `${styles.activeItem}`
                  : `${styles.item}`
              }`}
            >
              <span
                className={`link ${
                  pathname === "/groups/yourGroups"
                    ? `${styles.activeIcon}`
                    : `${styles.icon}`
                }`}
              >
                <GroupsIcon />
              </span>
              <span className={styles.text}>Bảng feed của bạn</span>
            </Link>
          </div>
          <div className={styles.button}>
            <ButtonCustom
              border="none"
              color="var(--lightBlue)"
              cursor="pointer"
              textColor="var(--boldBlue)"
              fontSize="15px"
              textAlign="center"
              children="+ Tạo nhóm mới"
              height="36px"
              radius="6px"
              width="100%"
              onClick={() => router.push("/groups/create")}
            />
          </div>
          <hr />
          <div className={styles.groups}>
            <div className={styles.title}>
              <h3 className={styles.joinedGroup}>Nhóm bạn đã tham gia</h3>
              <ButtonCustom
                border="none"
                textColor="var(--black)"
                fontSize="13px"
                children="Xem tất cả"
                color="var(--white)"
                cursor="pointer"
              />
            </div>
            <div className={styles.group}>
              <div className={styles.imgGroup}>
                <Image
                  height={48}
                  width={48}
                  alt="avatar"
                  src={
                    "https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                  }
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.nameGroup}>Toan cao cap-IUH</h3>
                <p className={styles.time}>
                  Lần hoạt động gần nhất: 6 giờ trước
                </p>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.imgGroup}>
                <Image
                  height={48}
                  width={48}
                  alt="avatar"
                  src={
                    "https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                  }
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.nameGroup}>Toan cao cap-IUH</h3>
                <p className={styles.time}>
                  Lần hoạt động gần nhất: 6 giờ trước
                </p>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.imgGroup}>
                <Image
                  height={48}
                  width={48}
                  alt="avatar"
                  src={
                    "https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                  }
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.nameGroup}>Toan cao cap-IUH</h3>
                <p className={styles.time}>
                  Lần hoạt động gần nhất: 6 giờ trước
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftBar;

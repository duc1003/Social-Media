"use client";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ClearIcon from '@mui/icons-material/Clear';

import Comments from "../comments/Comments";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./post.module.css";
import Popover from "../popover/Popover"
import ButtonCustom from "../Button/ButtonCustom";
const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [countLike, setCountLike] = useState(12);
  const [liked, setLiked] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const dataPopover = [
    {id :1, title : "Lưu bài viết", icon: <BookmarkIcon/>},
    {id :2, title : "Ẩn bài viết", icon: <ClearIcon/>},

  ]
  useEffect(() => {
    if (liked) {
      setCountLike(countLike + 1);
    } else {
      setCountLike(countLike - 1);
    }
  }, [liked]);
  return (
    <div className={styles.post}>
      <div className={styles.container}>
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
              <Link href={`/profile/${post.userId}`}>
                <span className={styles.name}>{post.name}</span>
              </Link>
              <span className={styles.date}>1 min ago</span>
            </div>
          </div>
          
          <div className={styles.popoverWrapper}>
              <span className={styles.popoverButton} onClick={() => setPopoverOpen(!popoverOpen)}><MoreHorizIcon /></span>
              {popoverOpen ? 
              <Popover dataPopover={dataPopover} /> : <></>}
          
          </div>
        </div>
        <div className={styles.content}>
          <p>{post.desc}</p>
          <Image
            src={
              "https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
            }
            alt=""
            // width={650}
            // height={500}
            sizes="100vw"
            fill
          />
        </div>
        <div className={styles.info}>
          {/* onClick={() => setLiked(!liked)} */}
          <div className={styles.item} >
            {/* {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />} */}
            <ButtonCustom
            fontSize = "14px"
            border="none"
            color = "var(--white)"
            
            onClick = {() => setLiked(!liked)}
          >
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
          </ButtonCustom>
            {countLike}
          </div>

          <div
            className={styles.item}
            onClick = {() => setCommentOpen(!commentOpen)}
          >
            <ButtonCustom
            fontSize = "14px"
            border="none"
            color = "var(--white)"
            
            
          >
            {<TextsmsOutlinedIcon />}
          </ButtonCustom>
            12 Comments
          </div>
          <div className={styles.item} onClick = {() => {}}>
          <ButtonCustom
            fontSize = "14px"
            border="none"
            color = "var(--white)"      
          >
          {<ShareOutlinedIcon />}
          </ButtonCustom>
            
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;

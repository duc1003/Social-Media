import React from "react";
import styles from "./comments.module.css";
import Image from "next/image";
import ButtonCustom from "../Button/ButtonCustom";
import Comment from "../comment/Comment";
export default function Comments() {
  const comments = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return (
    <div className={styles.comments}>
      <div className={styles.inputContainer}>
        <span className={styles.img}>
          <Image
            width={40}
            height={40}
            src={
              "https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
            }
          />
        </span>
        <input
          type="text"
          placeholder="Write a comment"
          className={styles.input}
        />
        <ButtonCustom
          border="none"
          color="var(--boldBlue)"
          textColor="var(--white)"
          textAlign="center"
          width="58px"
          height="30px"
          children="Send"
          margin="0 0 0 15px"
        />
      </div>
      <div className={styles.comment}>
        {comments.map( data =>(
          <Comment data={data} key={data.id}/>
        ))}
        

      </div>

    </div>
  );
}

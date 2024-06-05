

import styles from './stories.module.css';

const Stories = () => {



  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg",
    },
  ];

  return (
    <div className={styles.stories}>
      <div className={styles.story}>
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg" alt="" />
          <span>Thịnh</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className={styles.story} key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
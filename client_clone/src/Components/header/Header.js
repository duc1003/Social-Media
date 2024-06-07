import styles from "./header.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ButtonCustom from "../Button/ButtonCustom"
const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <a href="/" style={{ textDecoration: "none" }}>
          <span>SocialMedia</span>
        </a>
        <ButtonCustom
            fontSize = "14px"
            border="none"
            color = "var(--white)"
            cursor = "pointer"
            
          >
            {<HomeOutlinedIcon />}
          </ButtonCustom>
          <ButtonCustom
            fontSize = "14px"
            border="none"
            cursor = "pointer"
            color = "var(--white)"
            
          >
            {<WbSunnyOutlinedIcon />}
          </ButtonCustom>
        {/* <HomeOutlinedIcon />
        <WbSunnyOutlinedIcon /> */}
      </div>
      <div className={styles.search}>
        
        <ButtonCustom
            fontSize = "14px"
            border="none"
            color = "var(--white)"
            cursor = "pointer"
            
          >
            {<SearchOutlinedIcon />}
          </ButtonCustom>
        <input type="text" placeholder="Search..." />
      </div>
      <div className={styles.right}>
      <ButtonCustom
            fontSize = "14px"
            border="none"
            color = "var(--white)"
            cursor = "pointer"
            
          >
            {<EmailOutlinedIcon />}
          </ButtonCustom>
      <ButtonCustom
            fontSize = "14px"
            border="none"
            color = "var(--white)"
            cursor = "pointer"
            
          >
            {<NotificationsOutlinedIcon />}
          </ButtonCustom>
    
        
        
        <div className={styles.user}>
          <img
            src={
              "https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
            }
            alt=""
          />
          <span>Thịnh</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

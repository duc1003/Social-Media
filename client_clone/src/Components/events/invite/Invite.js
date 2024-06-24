'use client'
import React,{useState} from 'react'
import styles from './invite.module.css'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
const Invite = ({open,handleClose}) => {
  const [active,setActive] =useState(false);
  const handleActive = ()=>{
    setActive(true)
  }
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className = {styles.boxModel}>
          <div className={styles.container}>
            <div className={styles.boxSearch}>
              <input placeholder='Tìm kiếm...'/>
              <button>Search</button>
            </div>
            <div className={styles.boxAccount}>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button className={`${active ? styles.active : ''}`} onClick={handleActive}>{active ? "Invited" : "Invite"}</button>
              </div>
              





              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
              <div className={styles.account}>
                <div className={styles.accountAvatar}>
                  <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210416/pngtree-purple-starry-gentle-gentle-and-colorful-clouds-background-image_619990.jpg"
                    alt="accountAvatar"
                  />
                  <h5 className={styles.name}>Hoàng Kim Thịnh</h5>
                </div>
                <button>Invite</button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
  )
}

export default Invite
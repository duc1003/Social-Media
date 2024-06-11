import styles from './memories.module.css'
import memories from '../../assets/memoriesFaceHome.png'
import Image from 'next/image'
export default function Memories() {
    return (
        <div className={styles.rightBox}>
          <Image className={styles.rightImg} src={memories} alt='memories' width={600} height={"auto"}/>
          <h4 className={styles.rightTitle}>Không có kỷ niệm hôm nay</h4>
          <p className={styles.rightContent}>Hôm nay không có Kỷ niệm nào để xem hay chia sẻ, nhưng chúng tôi sẽ thông báo cho bạn khi bạn có khoảnh khắc để ôn lại.</p>
        </div>
    )
  }
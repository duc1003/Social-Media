import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/header/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
    </div>
  );
}

import Link from "next/link";
import styles from "@/components/layout/Footer.module.css";

import { FiInstagram } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoCall } from "react-icons/io5";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.share}>
        <div className={styles.list}>
          <ul>
            <li>شهر مریانج</li>
            <li>ورزشگاه</li>
            <li>مقالات ورزشی</li>
            <li>ارتباط با عوامل</li>
          </ul>
          <ul>
            <li>تماس با ما</li>
            <li>تماس با تیم برنامه نویس</li>
            <li> اخبار</li>
            <li>  کمک</li>
          </ul>
        </div>
        
        <div className={styles.relationship}>
        <span style={{color: "#E21137"}}><Link href="/"><FiInstagram /></Link></span>
        <span style={{color: "#0E91D2"}}><Link href="/"><FaTelegram /></Link></span>
        <span><Link href="/"><FcGoogle /></Link></span>
        <span><Link href="/"><IoCall /></Link></span>
        </div>
      </div>
      <p>شهرداری مریانج تیمی از شهر مریانج واقع در استان همدان که فعالیت خود را از سال 1373 آغاز کرده است</p>
    </footer>
  )
}

export default Footer
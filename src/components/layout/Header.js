import Image from "next/image";
import Link from "next/link";

import styles from "@/components/layout/Header.module.css"

import { IoFootball } from "react-icons/io5";
import { SiGnuprivacyguard } from "react-icons/si";

function Header() {
  return (
    <header className={styles.container}>
        <div className={styles.div}>
            <div className={styles.name}>
                <IoFootball />
                <h2>شهرداری مریانج</h2>
            </div>

            <hr className={styles.rotate}/>

            <div className={styles.register}>
                <Link href="/signin">ورود</Link>
                <div>
                <Link href="/signup">ثبت نام</Link>
                <SiGnuprivacyguard />
                </div>
            </div>

            <hr className={styles.rotate}/>


            <span></span>
            <div className={styles.list}>
                <ul>
                    <Link href="/"><li>صفحه اصلی</li></Link>
                    <li>مجموعه</li>
                    <Link href="/players"><li>بازیکنان</li></Link>
                    <Link href="/team-coaches"><li>مربیان</li></Link>
                    <li> هییت مدیره</li>
                </ul>
            </div>
            <div className={styles.menu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        <div className={styles.logo}>
            <Image src="/image/logo.jpg" width={60} height={50} alt="logo"/>
        </div>
        </div>
    </header>
  )
}

export default Header
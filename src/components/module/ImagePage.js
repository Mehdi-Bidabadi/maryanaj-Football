import Image from "next/image";
import styles from "@/components/module/ImagePage.module.css";

import { IoMdOptions } from "react-icons/io";
import { RiMiniProgramLine } from "react-icons/ri";
import { MdFoodBank } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosFitness } from "react-icons/io";
import Link from "next/link";

function ImagePage() {
  return (
    <div className={styles.container}>

      <div className={styles.list}>
        <div>
          <h3>امکانات :</h3>
          <IoMdOptions />
        </div>
        <ul>


          <li><Link href="/practice-date">برنامه تمرین</Link></li>
          <li><Link href="/">برنامه مسابقه</Link></li>
          <Link href="/list/weekly-schedule"><li>برنامه هفتگی <RiMiniProgramLine /></li></Link>
          <li> <Link href="/diet">رژیم غذایی<MdFoodBank />
          </Link>
          </li>
          <li>تمرینات انفرادی <CgGym /></li>
          <li><Link href="/halls">سالن استخر و فوتسال</Link></li>
          <li>سالن بدنسازی <IoIosFitness /></li>
          <li>ارتباط با کادر فنی <FaPhoneVolume /></li>
        </ul>
      </div>

      <div className={styles.image}>
        <div className={styles.imgup}>
          <div className={styles.right}>
            <Image className={styles.img} src="/image/1.jpg" width={950} height={200} alt="png" style={{ WebkitBorderTopRightRadius: "50px" }} />
          </div>
          <div className={styles.left}>
            <Image className={styles.img} src="/image/2.png" width={950} height={200} alt="png" style={{ borderTopLeftRadius: "50px" }} />
          </div>
        </div>
        <div className={styles.imgbottom}>
          <Image className={styles.img__banner} src="/image/messi.png" width={300} height={200} alt="png" />

        </div>
      </div>
    </div>
  )
}

export default ImagePage
import { IoIosMore } from "react-icons/io";

import images from "@/constants/DataImg"
import Image from "next/image"
import styles from "@/components/module/PlayersPage.module.css"
import Link from "next/link";

function PlayersPage() {
  return (
    <div className={styles.container}>
      <h3>بازیکنان</h3>
      <div className={styles.card}>
        {images.map((i) => (
          <div className={styles.players} key={i.name}>
            <Link href={`/profile/${i.userId}`}>
              <Image className={styles.img} src={i.img} width={250} height={250} alt={i.name} />
              <div className={styles.info}>
                <p>{i.name}</p>
                <span>age: {i.age}</span>
              </div>
            </Link>
          </div>
        ))}

      </div>
      <button>
        <Link href="/players">
          همه بازیکنان
          <IoIosMore />
        </Link>
      </button>
    </div>
  )
}

export default PlayersPage
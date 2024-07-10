import styles from "@/components/module/CoachesCard.module.css";
import Image from "next/image";

function CoachesCard({data}) {
  return (
    <div className={styles.container}>
        <Image src={data.image} width={200} height={200} alt="img" />
        <div className={styles.desc}>
            <h4>نام و نام خانوادگی :{data.name}</h4>
            <p>سن:{data.age}</p>
        </div>
        <div className={styles.relationship}>
            <p className={styles.call}>شماره تماس{data.call}</p>
            <p>آیدی تلگرام{data.idTel}</p>
            <p className={styles.instagram}>اینستاگرام{data.instagram}</p>
        </div>
    </div>
  )
}

export default CoachesCard;
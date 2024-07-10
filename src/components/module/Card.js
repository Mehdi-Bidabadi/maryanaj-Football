import Image from "next/image";
import styles from "@/components/module/card.module.css";

function Card({ data }) {
    return (
        <div className={styles.container}>
            <Image className={styles.img} src={data.img} width={200} height={200} alt={data.name} />
            <div className={styles.info}>
                <p>{data.name}</p>
                <spa>age: {data.age}</spa>
            </div>
        </div>
    )
}

export default Card
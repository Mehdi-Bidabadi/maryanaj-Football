import Image from "next/image";
import styles from "@/components/module/HallsCard.module.css";

function Hallscard({data}) {
  return (
    
    <div className={styles.container}>
        <Image src={data.image} width={200} height={200} alt="img" />
        <div className={styles.desc}> 
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        </div>
    </div>
  )
}

export default Hallscard
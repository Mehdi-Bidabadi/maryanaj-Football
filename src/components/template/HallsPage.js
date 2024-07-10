import gym from "@/constants/gym";
import Hallscard from "../module/Hallscard";
import styles from "@/components/template/HallsPage.module.css";

function HallsPage() {
  return (
    <div className={styles.container}>
        {gym.map((i, index) => (
            <Hallscard key={index} data={i}  />
        ))}
    </div>
  )
}

export default HallsPage
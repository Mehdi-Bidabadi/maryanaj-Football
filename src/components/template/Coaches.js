import { coaches } from '@/constants/coaches'
import styles from '@/components/template/Coaches.module.css';
import CoachesCard from '../module/CoachesCard'

function Coaches() {
  return (
    <div className={styles.container}>
        {coaches.map((i, index) => (
            <CoachesCard key={index} data={i} />
        ))}
    </div>
  )
}

export default Coaches;
import styles from '@/components/module/MidfieldersCard.module.css';
import midfielders from '@/constants/Midfielders';
import Card from './Card';

function MidfieldersCard() {
  return (
    <>
    <h2>هافبک</h2>
    <div className={styles.container}>
    {midfielders.map((i) => (
        <Card key={i.name} data={i}/>
    ))}
    </div>
    </>
  )
}

export default MidfieldersCard
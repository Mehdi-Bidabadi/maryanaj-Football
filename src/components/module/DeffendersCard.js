import deffends from "@/constants/deffends"
import Card from "./Card";
import styles from '@/components/module/DeffendersCard.module.css'

function DeffendersCard() {
    return (
        <>
            <h2>مدافع </h2>
            <div className={styles.container}>
                {deffends.map((i) => (
                    <Card key={i.name} data={i} />
                ))}
            </div>
        </>
    )
}

export default DeffendersCard
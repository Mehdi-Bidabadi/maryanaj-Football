import styles from "@/components/module/ForwardsCard.module.css"
import forwards from "@/constants/Forwards"
import Card from "./Card"

function ForwardsCard() {
  return (
    <>
    <h2>مهاجم</h2>
    <div className={styles.container}>
        {forwards.map((i) => (
            <Card key={i.name} data={i} />
        ))}
    </div>
    </>
  )
}

export default ForwardsCard
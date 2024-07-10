import { useRouter } from "next/navigation";
import styles from "@/components/module/DietCard.module.css";

function DietCard({data}) {
    const id = data._id

    
    const deleteHandler = async (i) => {
        console.log(id)
    
        const res = await fetch("/api/diet/delete", {
          method: "POST",
          body: JSON.stringify({ id }),
          headers: { "Content-Type": "application/json" },
    
        })
        const data = await res.json();
      }
  return (
    <div className={styles.container}>
    <div className={styles.date}>
      <p>{new Date(data.week_day).toLocaleDateString("fa-IR")}</p>
      <span>11.8</span>
    </div>
    <div className={styles.desc}>
      <h4>{data.title}</h4>
      <p>{data.description}</p>
    </div>
    <div className={styles.delete}>
      <button onClick={deleteHandler}>حذف برنامه</button>
      <button className={styles.edit}>ویرایش</button>
    </div>
  </div>
  )
}

export default DietCard
"use client"
import styles from '@/components/module/Cards.module.css';

function Cards({ data }) {
  const id = data._id


const deleteHandler = async (i) => {

    const res = await fetch("/api/weekly/delete", {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },

    })
    const data = await res.json();
    if(res.status === 200){
      location.reload()
    }
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

export default Cards;
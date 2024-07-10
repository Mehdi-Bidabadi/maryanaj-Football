import styles from "@/components/module/ProgramCard.module.css";
function Programcard({data}) {
 const id = data._id;

 const deletehandler = async () => {
  const res = await fetch("api/practice/delete", {
    method: "POST",
    body: JSON.stringify({id}),
    headers: { "Content-Type": "application/json" },
  })
  const result = await res.json()
  if(res.status === 200){
    location.reload()
  }
 }
  return (
    <div className={styles.container}>
      <h5>استادیوم: {data.title}</h5>
      <div className={styles.date}>
        <p>تاریخ : {new Date(data.day).toLocaleDateString("fa-IR")}</p>
        <span>ساعت : {data.watch}</span>
      </div>
      <div className={styles.desc}>
        <p>توجه : {data.description}</p>
      </div>

      <div className={styles.delete}>
        <button onClick={deletehandler}>حذف</button>
        <button className={styles.edit}>ویرایش</button>
      </div>
    </div>
  )
}

export default Programcard
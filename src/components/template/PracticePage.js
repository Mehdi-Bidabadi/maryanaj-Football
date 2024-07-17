"use client"
import { useEffect, useState } from 'react';
import styles from "@/components/template/PracticePage.module.css";
import Programcard from '../module/Programcard';
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"


function PracticePage() {
  const [stadium, setStadium] = useState("");
  const [description, setDescription] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [datas, setDatas] = useState({});




  useEffect(() => {
    fetch("api/practice")
      .then((res) => res.json())
      .then((x) => setDatas(x))
  }, [])



  const addHandler = async () => {
    const res = await fetch("/api/practice", {
      method: "POST",
      body: JSON.stringify({ stadium, description, day, time }),
      headers: { "Content-Type": "application/json" },

    })
    const result = await res.json();
    if (res.status === 201) {
      location.reload()
    }

  }

  const handleChange = (date) => {
    setDay({
      ...day,
      day: date
    });
  }

  return (
    <div className={styles.container}>
      <div>
        {datas.data?.map((i) => (
          <Programcard key={i._id} data={i} />
        ))}
      </div>


      
        <div className={styles.form}>
        <label>ورزشگاه</label>
        <input type='text' placeholder="موضوع" value={stadium} onChange={(e) => setStadium(e.target.value)} />
        <label>تاریخ</label>
        <DatePicker
          inputClass={styles.datepicker}
          calendar={persian}
          locale={persian_fa}
          placeholder="تاریخ"
          selected={day}
          onChange={handleChange}
        />
        <label>ساعت</label>
        <input type='text' placeholder="ساعت" value={time} onChange={(e) => setTime(e.target.value)} />
        <label>توضیحات</label>
        <textarea type='text' textarea={description ? 1 : 0} value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={addHandler}>ثبت</button>
      </div>
    
    </div>
  )
}

export default PracticePage;
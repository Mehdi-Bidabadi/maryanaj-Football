"use client"
import React, { useEffect, useState } from 'react'

import styles from "@/components/template/WeeklyPage.module.css";
import Cards from '../module/Cards';


function WeeklyPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [data, setData] = useState([]);

    

    useEffect(() => {
        fetch("/api/weekly")
            .then(res => res.json())
            .then(data => setData(data))
            
    }, [])

    const addHandler = async () => {

        const res = await fetch("/api/weekly", {
            method: "POST",
            body: JSON.stringify({ title, description }),
            headers: { "Content-Type": "application/json" },
            

        })
        const result = await res.json();
        if(res.status === 201){
             location.reload()
            
         }
    }
    return (
        <>
            <div>
                {data ? (

                    <div>
                        {data.data?.map((e) => (
                            <Cards key={e._id} data={e} />
                        ))}
                    </div>
                ) : (<p className={styles.p}>هیچ برنامه ای وجود ندارد</p>)}

                <div className={styles.container}>
                    <label>موضوع</label>
                    <input type='text' placeholder="موضوع" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label>توضیحات</label>
                    <textarea type='text' textarea={description ? 1 : 0} value={description} onChange={(e) => setDescription(e.target.value)} />
                    <button onClick={addHandler}>ثبت</button>
                </div>


            </div>
        </>
    )
}

export default WeeklyPage;
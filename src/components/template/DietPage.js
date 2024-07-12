"use client"
import styles from "@/components/template/DietPage.module.css"
import { useEffect, useState } from "react";
import DietCard from "../module/DietCard";

function DietPage() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch("/api/diet")
            .then(res => res.json())
            .then(data => setData(data))
            
    }, [])


    const addHandler = async () => {
        const res = await fetch("/api/diet", {
            method: "POST",
            body: JSON.stringify({ title, description }),
            headers: { "Content-Type": "application/json" },
            

        })
        const result = await res.json();
        
    }
    return (
        <div>
            <div>
                {data.data?.map((e) => (
                    <DietCard key={e._id} data={e} />
                ))}
            </div>

            <div className={styles.container}>
                <label>موضوع</label>
                <input type='text' placeholder="موضوع" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>توضیحات</label>
                <textarea type='text' textarea={description  ? 1 : 0} value={description} onChange={(e) => setDescription(e.target.value)} />
                <button onClick={addHandler}>ثبت</button>
            </div>
        </div>
    )
}

export default DietPage
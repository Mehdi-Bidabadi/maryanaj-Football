"use client"
import styles from "@/components/template/Signup.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Sigup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePssword] = useState("");





    const router = useRouter()

    const signuphandler = async (e) => {
        e.preventDefault();

        if (password !== rePassword) {
            toast.error("رمز و تکرار آن اشتباه است")
            return;
        }

        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },

        })
        const data = await res.json();
        if(res.status === 201){
            router.push("/signin")
        }else{
            toast.error(data.error)

        }
    }
    return (
        <div className={styles.container}>
            <h4>فرم ثبت نام</h4>
            <form>
                <label>ایمیل</label>
                <input
                    type='text'
                    placeholder='ایمیل'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <label>رمز عبور </label>
                <input
                    type='password'
                    placeholder='رمز عبور '
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <label>تکرار رمز عبور</label>
                <input
                    type='password'
                    placeholder='تکرار رمز عبور '
                    value={rePassword}
                    onChange={(e) => setRePssword(e.target.value)} />

                <button type="submit" onClick={signuphandler}>ثبت نام</button>
            </form>
            <Toaster />
        </div>
    )
}

export default Sigup
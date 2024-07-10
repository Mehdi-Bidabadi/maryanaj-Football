"use client"

import { useState } from "react";
import styles from "@/components/template/SignIn.module.css";
import { signIn } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const loginHandler = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if(res.error) {
      toast.error(res.error)
    }else{
      router.push("/")
    }
  }
  return (
    <div className={styles.container}>
      <h4>فرم ورود </h4>
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
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={loginHandler}>ورود</button>

      </form>
      <Toaster />
    </div>
  )
}

export default SignIn
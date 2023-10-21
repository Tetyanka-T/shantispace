"use client"

import Link from "next/link"
import { ChangeEvent, useState, FormEvent } from "react"
import { useRouter } from "next/navigation";
import {signIn} from "next-auth/react"

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "password":
          setPassword(value);
        break;

      case "email":
        setEmail(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email, password, redirect: false
      })
console.log(res)
      // if (res.error) {
      //   setError("Неправильні дані")
      //   return
      // }
      router.replace("/blog-user")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="grid place-items-center mt-20">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-amber-800">
            <h1 className="text-xl font-bold my-4">Увійти в акаунт</h1>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input type="text"
               name="email"
               onChange={handleChange}
               placeholder="email"/>
             <input type="text"
              name="password"
               onChange={handleChange}
               placeholder="пароль"/>
             <button className="bg-amber-800 text-white font-bold cursor-pointer px-6 py-2 w-48 mx-auto my-4">
              Увійти
             </button>
             {error && <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>}
             <Link href="/register" className="underline text-sm mt-3 text-right">
              Зареєструватися
             </Link>
           </form>
        </div>
      </div>
  )
}

export default LoginForm
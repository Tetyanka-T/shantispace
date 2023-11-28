"use client"

import Link from "next/link"
import AuthSocialButton from './AuthSocialButton';
import { ChangeEvent, useState, FormEvent, useEffect } from "react"
import { BsGoogle  } from 'react-icons/bs';
import { useRouter } from "next/navigation";
import {signIn, useSession} from "next-auth/react"
import {toast} from "react-hot-toast";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/')
    }
  }, [session?.status, router]);
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
     await signIn("credentials", {
        email, password, redirect: false
      })
      if(!email || !password) {
        toast.error("Неправильні дані")
      }
      router.replace("/")
    } catch (error) {
      console.log(error)
    }
  }
  const socialAction = (action: string) => {
    setLoading(true);
  
    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Invalid credentials!');
        }
  
        if (callback?.ok) {
          router.push('/')
        }
      })
      .finally(() => setLoading(false))}
  return (
    <div className="my-20 w-290px mx-auto sm:w-96">
        <div className="shadow-lg p-3 rounded-lg border-t-4 border-amber-950">
            <h1 className="text-xl font-bold my-4 text-center">Увійти в акаунт</h1>
            <form className="flex flex-col justify-center items-center gap-3" onSubmit={handleSubmit}>
              <input 
               className="sm:w-80"
               type="text"
               name="email"
               onChange={handleChange}
               placeholder="email"/>
              <input 
                className="sm:w-80"
                type="text"
                name="password"
                onChange={handleChange}
                placeholder="пароль"/>
             <button className="shadow-xl shadow-neutral-500  rounded-md bg-amber-950 text-white font-bold cursor-pointer px-6 py-2 w-48 mx-auto my-4">
              Увійти
             </button>
             {error && <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>}
             <div className='text-center'>
            <p className='text-sm mb-2'>Увійти за допомогою Google</p>
            <AuthSocialButton 
              icon={BsGoogle} 
              onClick={() => socialAction('google')} 
            />
          </div>
             
             <Link href="/register" className="underline text-sm mt-3 ml-auto">
              Зареєструватися
             </Link>
           </form>
        </div>
      </div>
  )
}

export default LoginForm
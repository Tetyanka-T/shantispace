"use client"
import Link from "next/link"
import { ChangeEvent, useState, FormEvent } from "react"
import { useRouter } from "next/navigation";


const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("");

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

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
  
  if (!name || !email || !password) {
    setError("Необхідно заповнити всі поля")
    return
  }
  try {
    setLoading(true)
   const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({name, email, password})
    })

    if(response.ok) {
      router.push("/blog-user");
      setEmail("");
      setName("");
      setPassword("")
    } else {
      setError("Registered failed")
    }
  } catch (error) {
    console.log("Error during registration: ", error)
  }
}
  return (
    <div className="grid place-items-center mt-20">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-amber-800">
        <h1 className="text-xl font-bold my-4">Форма реєстрації</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input type="text"
           name="name"
           onChange={handleChange}
           placeholder="Ім'я Прізвище"/>
          <input type="text"
           name="email"
           onChange={handleChange}
           placeholder="email"/>
          <input type="text"
           name="password"
           onChange={handleChange}
           placeholder="пароль"/>
          <button className="bg-amber-800 text-white font-bold cursor-pointer px-6 py-2 w-48 mx-auto my-4">
          Зареєструватися
          </button>
          {error && <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>}
          
          <Link href="/login" className="underline text-sm mt-3 text-right">
              Вже є акаунт
          </Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
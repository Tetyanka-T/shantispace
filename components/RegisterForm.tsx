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
      body: JSON.stringify({name, email, password, role: "user"})
    })

    if(response.ok) {
      router.push("/login");
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
    <div className="my-20 w-290px mx-auto sm:w-96">
      <div className="shadow-lg p-3 rounded-lg border-t-4 border-amber-800">
        <h1 className="text-xl font-bold my-4 text-center">Форма реєстрації</h1>
        <form className="flex flex-col justify-center items-center gap-3" onSubmit={handleSubmit}>
          <input
           className="sm:w-80"
           type="text"
           name="name"
           onChange={handleChange}
           placeholder="Ім'я Прізвище"/>
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
          <button className="bg-amber-900 text-white font-bold cursor-pointer px-6 py-2 w-48 mx-auto my-4">
          Зареєструватися
          </button>
          {error && <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>}
          
          <Link href="/login" className="underline text-sm mt-3 ml-auto">
              Вже є акаунт
          </Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
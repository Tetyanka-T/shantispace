"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";


const AnswerForm = ({question}) => {
    const [adminAnswer, setAdminAnswer] = useState(question.adminAnswer)

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`https://shantispace.vercel.app/${question._id}`, {
              method: "PUT",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({ text: question.text, userEmail: question.userEmail, userName: question.userName, adminName: question.adminName, adminAnswer }),
            });
      
            if (!res.ok) {
              throw new Error("Failed to update question");
            }
    
            router.push("/questions");
          } catch (error) {
            console.log(error);
          }

    }
  return (
    <form onSubmit={onSubmit} className="mx-auto flex flex-col justify-center items-center my-4 ">
        <textarea className="w-64 sm:w-80"
           placeholder="Дайте відповідь на запитання"
           value={adminAnswer}
           onChange={(e) => setAdminAnswer(e.target.value)}
        />
        <button className="shadow-xl shadow-neutral-500 rounded-md bg-amber-950 font-bold text-white py-3 px-6 w-fit mt-3">Відповісти</button>
    </form>
  )
}

export default AnswerForm
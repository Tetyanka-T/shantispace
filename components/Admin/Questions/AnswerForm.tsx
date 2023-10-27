"use client"

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation";
import IQuestion from "@/app/interface/interface"

const AnswerForm = ({question} : {question: IQuestion}) => {
    const [adminAnswer, setAdminAnswer] = useState(question.adminAnswer)

    const router = useRouter()

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch(`http://localhost:3000/api/questions/${question._id}`, {
              method: "PUT",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({ text: question.text, userEmail: question.userEmail, userName: question.userName, adminName: question.adminNane, adminAnswer }),
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
        <button className="bg-amber-800 font-bold text-white py-3 px-6 w-fit mt-3">Відповісти</button>
    </form>
  )
}

export default AnswerForm
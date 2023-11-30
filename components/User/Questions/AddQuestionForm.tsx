"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {useSession} from "next-auth/react"
import {toast} from "react-hot-toast";

const AddQuestionForm = () => {
    const [text, setText] = useState('')
    const router = useRouter();

    const {data: session, status} = useSession()
    const userName = session?.user?.name;
    const userEmail = session?.user?.email
  
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
  
      if (!text) {
        alert("Напишіть питання");
        return;
      }
  
      try {
  
        const res = await fetch("https://shantispace.vercel.app/api/questions", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ text, userName, userEmail }),
        });
  
        if (res.ok) {
          toast("Як тільки Дарина надасть відповідь на Ваше питання, воно з'явиться у розділі Питання");
          router.push("/blog-user");
        } else {
          throw new Error("Failed to create a question");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <>
        <h2 className="text-center text-xl font-bold">Задайте питання Дарині</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 justify-center items-center my-4">
          <textarea 
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="border border-slate-500 px-8 py-2 h-72"
        
          placeholder="Напишіть Ваше питання"
        />
     
         <button
          type="submit"
          className="shadow-lg shadow-neutral-500 rounded-md bg-amber-950 font-bold text-white py-3 px-6 w-fit mx-auto mt-3"
         >
          Відправити
         </button>
      </form>
      </>
    
    );
  }
  


export default AddQuestionForm
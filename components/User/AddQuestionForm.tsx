"use client";

import { FormEvent, SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

const AddQuestionForm = () => {
    const [text, setText] = useState('')
    const router = useRouter();

    const userName = "Galya";
    const userEmail = "tata@gmail.com"
  
  
    const handleSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();
  
      if (!text) {
        alert("Напишіть питання");
        return;
      }
  
      try {
  
        const res = await fetch("/api/questions", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ text, userName, userEmail }),
        });
  
        if (res.ok) {
          alert("Як тільки Дарина надасть відповідь на Ваше питання, воно з'явиться у розділі Питання");
          router.push("/blog-user");
        } else {
          throw new Error("Failed to create a question");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 justify-center items-center my-4">
          <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="border border-slate-500 px-8 py-2"
        
          placeholder="Напишіть Ваше питання"
        />
     
         <button
          type="submit"
          className="bg-amber-800 font-bold text-white py-3 px-6 w-fit mx-auto mt-3"
         >
          Добавити питання
         </button>
      </form>
    );
  }
  


export default AddQuestionForm
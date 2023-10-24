
"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thema, setThema] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  


  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title || !description || !thema) {
      alert("Тема, заголовок та опис є обов'язковими");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/articles", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, thema, imgSrc }),
      });

      if (res.ok) {
        router.push("/articles");
      } else {
        throw new Error("Failed to create a article");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 justify-center">
        <input
        onChange={(e) => setThema(e.target.value)}
        value={thema}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Тема статті"
      />
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Заголовок статті"
      />

      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
      
        placeholder="Текст статті"
      />
   <input
        onChange={(e) => setImgSrc(e.target.value)}
        value={imgSrc}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Посилання на фото для данної статті"
      />
      <button
        type="submit"
        className="bg-amber-800 font-bold text-white py-3 px-6 w-fit mx-auto mt-3"
      >
        Добавити статтю
      </button>
    </form>
  );
}

export default AddArticle;
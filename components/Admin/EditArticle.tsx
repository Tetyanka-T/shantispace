"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Article from "@/app/interface/interface"

type State = {
  thema: string;
  title: string;
  description: string;
};

const EditArticle = ({article} : ({article: Article})) => {
   
    const [title, setTitle] = useState(article.title);
    const [description, setDescription] = useState(article.description);
    const [thema, setThema] = useState(article.thema);
    const [imgSrc, setImgSrc] = useState(article.imgSrc);
    const router = useRouter();
  

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
  
      try {
        const res = await fetch(`http://localhost:3000/api/articles/${article._id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, description, thema }),
        });
  
        if (!res.ok) {
          throw new Error("Failed to update topic");
        }
  
        router.refresh();
        router.push("/articles/editarticle");
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="mx-auto flex flex-col justify-center items-center my-4">
        <input
          id="thema"
          onChange={(e) => setThema(e.target.value)}
          value={thema}
          name="thema"
          className="border border-slate-500 py-2 mb-3"
          type="text"
          placeholder="Дордайте тему для статті"
        />
      <input
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        name="title"
        className="border border-slate-500 py-2 mb-3"
        type="text"
        placeholder="Додайте заголовок для статті"
      />

      <textarea
        id="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        name="description"
        className="border border-slate-500 py-2 max-h-max mb-3"
        
        placeholder="Додайте текс для статті"
      />
       <input
        id="imgSrc"
        onChange={(e) => setImgSrc(e.target.value)}
        value={imgSrc}
        name="imgSrc"
        className="border border-slate-500 py-2 mb-3"
        type="text"
        placeholder="Змініть фото для статті"
      />

  
        <button className="bg-amber-800 font-bold text-white py-3 px-6 w-fit mt-3">
          Редагувати
        </button>
      </form>
    );
}

export default EditArticle




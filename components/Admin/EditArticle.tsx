"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Article from "@/interface/interface"

type State = {
  thema: string;
  title: string;
  description: string;
};

const EditArticle = ({article} : ({article: Article})) => {
   
    const [title, setTitle] = useState(article.title);
    const [description, setDescription] = useState(article.description);
    const [thema, setThema] = useState(article.thema);
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
        router.push("/blog-admin");
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          id="thema"
          onChange={(e) => setThema(e.target.value)}
          value={thema}
          name="thema"
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Description"
        />
      <input
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        name="title"
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        id="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        name="description"
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

  
        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Update Topic
        </button>
      </form>
    );
}

export default EditArticle




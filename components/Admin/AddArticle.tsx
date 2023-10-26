
"use client";

import { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thema, setThema] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | undefined>()
  // const [imgSrc, setImgSrc] = useState("");

  const router = useRouter();

  const onChangeImg = (e: FormEvent<HTMLInputElement> ) => {
    const target = e.target as | HTMLInputElement & {
      files: FileList;
    }

 setSelectedFile(target.files[0])

};



  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!title || !description || !thema) {
      alert("Тема, заголовок та опис є обов'язковими");
      return;
    }

    try {

      if (typeof selectedFile === 'undefined') {
        return
      }
      const formData = new FormData()
      formData.append('image', selectedFile);
    
      formData.set('key', '1a8804ffef9dc9883e0fafb181cfc3f1')

      const imgPosted = await fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        body: formData
      }).then(r => r.json())
      const urlImg = imgPosted.data.url
   


      const res = await fetch("/api/articles", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, thema, imgSrc: urlImg }),
      });

      if (res.ok) {
        router.push("/blog-admin");
      } else {
        throw new Error("Failed to create a article");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 justify-center items-center my-4">
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
   {/* <input
        onChange={(e) => setImgSrc(e.target.value)}
        value={imgSrc}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Посилання на фото для данної статті"
      /> */}
         <input
       
        onChange={onChangeImg}
        className="border border-slate-500 px-8 py-2"
        type="file"
        name="image"
        // placeholder="Посилання на фото для данної статті"
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
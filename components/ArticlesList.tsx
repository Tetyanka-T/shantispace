

import Link from "next/link";
import Article from "@/app/interface/interface";
import s from "@/app/styles/common.module.css"
import FilterArticles from "./FilterArticles";
import { useState } from "react";

const getArticles = async () => {
    try {
       const res = await fetch("http://localhost:3000/api/articles", {
        cache: "no-store",
        })

        if(!res.ok) {
            throw new Error("Failed to fetch articles")
        }
        return res.json()
    } catch (error) {
        console.log("Error loading articles: ", error)
    }
}

const ArticlesList = async () => {


    const {articles} = await getArticles()

 

  return (
    <section className="">
        <FilterArticles articles={articles}/>
        <ul className="mx-auto mt-3 text-base font-normal sm:grid grid-cols-2 gap-3 w-280px lg:grid-cols-3 xl:grid-cols-4">
            {articles.map((article: Article) => (
                <li key={article._id} className="border-2 border-solid p-3 rounded-lg min-[-320px]:mb-3 shadow-slate-50">
                    <Link href={`/articles/${article._id}`}>
                        <h2 className="text-right">{article.thema}</h2>
                        <p className="text-center my-2">{article.title}</p>
                        <p className="truncate">{article.description}</p>
                        <p className="text-right my-3 text-sm">Читати далі</p>
                    </Link>
                </li>
            ))}
        </ul>
    </section>
  
  )
}

export default ArticlesList
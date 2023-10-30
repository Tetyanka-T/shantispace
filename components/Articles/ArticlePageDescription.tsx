"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import ArticleI from "@/app/interface/interface"
import {IoMdArrowRoundBack} from "react-icons/io"
import GoBackButton from "../GoBackButton"



const ArticlePageDescription = ({article}: ({article: ArticleI})) => {
  const router = useRouter()

  return (
    <div className="my-4 mx-auto">
      <GoBackButton/>
      <h2 className="text-right my-2">{article.thema}</h2>
      {article.imgSrc && <Image alt="article photo" src={article.imgSrc} width={320} height={280} className="mx-auto"/>}
      
      
      <p className="text-center my-3">{article.title}</p>
    
      <p className="whitespace-pre-wrap">{article.description}</p>
    </div>
  )
}

export default ArticlePageDescription
import Image from "next/image"
import ArticleI from "@/app/interface/interface"



const ArticlePageDescription = ({article}: ({article: ArticleI})) => {

  return (
    <div className="my-4 mx-auto">
      <h2 className="text-right my-2">{article.thema}</h2>
      <Image alt="article photo" src={article.imgSrc} width={320} height={280} className="mx-auto"/>
      
      <p className="text-center my-3">{article.title}</p>
    
      <p className="indent-8 whitespace-pre-wrap">{article.description}</p>
    </div>
  )
}

export default ArticlePageDescription
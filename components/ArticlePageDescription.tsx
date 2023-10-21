import Image from "next/image"
import Article from "@/app/interface/interface"


const ArticlePage = ({article}: ({article: Article})) => {
  return (
    <div>
      <Image alt="article photo" src={article.imgSrc}/>
      <h2>{article.thema}</h2>
      <p>{article.title}</p>
      <p>{article.description}</p>
    </div>
  )
}

export default ArticlePage
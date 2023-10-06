import Article from "@/interface/interface"


const ArticlePage = ({article}: ({article: Article})) => {
  return (
    <div>
      <h2>{article.thema}</h2>
      <p>{article.title}</p>
      <p>{article.description}</p>
    </div>
  )
}

export default ArticlePage
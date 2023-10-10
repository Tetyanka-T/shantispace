import Link from "next/link";
import Article from "@/interface/interface";

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
    <>
    <h1>Articles Page</h1>
   
         {articles.map((article: Article) => (
            <li key={article._id}>
                <Link href={`/articles/${article._id}`}>
                <h2>{article.thema}</h2>
                <p>{article.title}</p>
                <p>{article.description}</p>
                </Link>
               

            </li>
        ))}
        

    </>
  
  )
}

export default ArticlesList
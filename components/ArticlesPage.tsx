
import ArticlesList from "./ArticlesList";

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

const ArticlesPage= async () => {


    const {articles} = await getArticles()

 

  return (
    <section className="">

        <ArticlesList articles={articles}/>
     
    </section>
  
  )
}

export default ArticlesPage
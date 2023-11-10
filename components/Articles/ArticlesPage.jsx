
import ArticlesList from "./ArticlesList";
import {client} from "@/libs/contentful/client"
import {BlogQueryResult} from "@/types";
// const getArticles = async () => {
//     try {
//        const res = await fetch("http://localhost:3000/api/articles", {
//         cache: "no-store",
//         })

//         if(!res.ok) {
//             throw new Error("Failed to fetch articles")
//         }
//         return res.json()
//     } catch (error) {
//         console.log("Error loading articles: ", error)
//     }
// }

const getArticles = async () => {
    const res = await client.getEntries({content_type: "post"});
    return res
}

const ArticlesPage= async () => {
    const blogEntries = await getArticles()

  return (
    <section className="my-4">

        <ArticlesList articles={blogEntries}/>
     
    </section>
  
  )
}

export default ArticlesPage
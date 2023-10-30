
import Navigation from "@/components/Navigation";
import EditArticlesList from "@/components/Admin/Articles/EditArticlesList";
import GoBackButton from "@/components/GoBackButton";


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

const ArticlesListWithEdit = async () => {


    const {articles} = await getArticles()
  

  return (
    <>
      <Navigation section="Редагувати статтю"/>
      <GoBackButton/>
      <EditArticlesList articles={articles}/>
    </>
  
  )
}

export default ArticlesListWithEdit
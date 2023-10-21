import Link from "next/link";
import Article from "@/app/interface/interface";
// import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import DeleteButton from "@/components/DeleteButton";
import Navigation from "@/components/Navigation";


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
   
         {articles.map((article: Article) => (
            <li key={article._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
             <div>
             <h2>{article.thema}</h2>
                <p>{article.title}</p>
                <p>{article.description}</p>
             </div>
              
             
                <div className="flex gap-2">
            <DeleteButton id={article._id} />
            <Link href={`/articles/editarticle/${article._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
               

            </li>
        ))}
        

    </>
  
  )
}

export default ArticlesListWithEdit
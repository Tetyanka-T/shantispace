import Link from "next/link";
import Article from "@/app/interface/interface";
// import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import DeleteButton from "@/components/DeleteButton";
import Navigation from "@/components/Navigation";
import FilterArticles from "@/components/FilterArticles";


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
      <FilterArticles articles={articles}/>
         <ul className="mx-auto mt-3 text-base font-normal sm:grid grid-cols-2 gap-3 w-280px lg:grid-cols-3 xl:grid-cols-4">
            {articles.map((article: Article) => (
              <li key={article._id} className="p-4 border border-slate-300 my-3 h-100">
                  <div className="flex items-center justify-end ">
                    <DeleteButton id={article._id} />
                    <Link href={`/articles/editarticle/${article._id}`}>
                      <HiPencilAlt size={24} className="fill-amber-900 ml-3"/>
                    </Link>
                  </div>
                
                    <h2 className="my-2">{article.thema}</h2>
                    <p className="text-center mb-2">{article.title}</p>
                    <p className="truncate">{article.description}</p>
               
              </li>
            ))}
          </ul>
    </>
  
  )
}

export default ArticlesListWithEdit
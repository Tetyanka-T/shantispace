import EditArticle from "@/components/Admin/EditArticle";
import Navigation from "@/components/Navigation";

type Params = {
	params: {
		id: string
	}
}

const getArticleById = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/articles/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
  
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  

const EditArticlePage = async ({ params }: Params) => {
    const {article} = await getArticleById(params.id);
  return (
    <>
     <Navigation section="Редагування статті"/>
     <EditArticle article={article}/>
    </>
  )
}

export default EditArticlePage


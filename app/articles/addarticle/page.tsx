import AddArticle from "@/components/Admin/Articles/AddArticle";
import GoBackButton from "@/components/GoBackButton";
import Navigation from "@/components/Navigation";



export default function AddArticlesPage() {
    return (
      <div>
        <Navigation section="Додати нову статтю"/>
        <GoBackButton/>
        <AddArticle/>
      </div>
    )
  }
  
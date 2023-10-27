
import ArticlesList from "@/components/Articles/ArticlesPage"
import Navigation from "@/components/Navigation"
import ProfileAdminBlog from "@/components/ProfileAdminBlog"
import AddQuestionButton from "@/components/User/Questions/AddQuestionButton"



const BlogUserPage = () => {


  return (
    <div>
      <Navigation section="Блог"/>
      <ProfileAdminBlog/>
      <AddQuestionButton/>
      <ArticlesList/>
    </div>
  )
}

export default BlogUserPage
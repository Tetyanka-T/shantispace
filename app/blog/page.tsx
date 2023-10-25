import ArticlesList from "@/components/ArticlesPage"
import Navigation from "@/components/Navigation"
import ProfileAdminBlog from "@/components/ProfileAdminBlog"


const BlogPage = () => {
  return (
    <div>
      <Navigation section="Блог"/>
      <ProfileAdminBlog/>
      <ArticlesList/>
    </div>
  )
}

export default BlogPage
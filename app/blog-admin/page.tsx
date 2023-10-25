

import ArticlesList from "@/components/ArticlesPage"
import Navigation from "@/components/Navigation"
import ProfileAdminBlog from "@/components/ProfileAdminBlog"



const BlogAdminPage = () => {

  return (
    <>
    
      <Navigation section="Блог"/>
      <ProfileAdminBlog/>
  
      <ArticlesList/>
      </>



  )
}

export default BlogAdminPage


import ArticlesPage from "@/components/Articles/ArticlesPage"
import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"
import ProfileAdminBlog from "@/components/ProfileAdminBlog"



const BlogAdminPage = () => {

  return (
    <>
    
      <Navigation section="Блог"/>
      <ProfileAdminBlog/>
      <ArticlesPage/>

    </>



  )
}

export default BlogAdminPage
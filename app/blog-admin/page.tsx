"use client"

import ArticlesList from "@/components/ArticlesList"
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
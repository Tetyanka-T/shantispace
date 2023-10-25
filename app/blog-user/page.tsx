"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import ArticlesList from "@/components/ArticlesPage"
import Navigation from "@/components/Navigation"
import ProfileAdminBlog from "@/components/ProfileAdminBlog"



const BlogUserPage = () => {

  return (
    <div>
      <Navigation section="Блог"/>
      <ProfileAdminBlog/>
      <ArticlesList/>
    </div>
  )
}

export default BlogUserPage
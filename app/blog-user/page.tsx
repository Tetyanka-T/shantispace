"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import ArticlesList from "@/components/ArticlesList"
import Navigation from "@/components/Navigation"
import ProfileAdminBlog from "@/components/ProfileAdminBlog"



const BlogUserPage = () => {
  // const {data: session} = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/api/auth/signin?callbackUrl=/blog-user")

  //   }
  // })
  return (
    <div>
      <Navigation section="Блог"/>
      <ProfileAdminBlog/>
  
        <ArticlesList/>
    </div>
  )
}

export default BlogUserPage
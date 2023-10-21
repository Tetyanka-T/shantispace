"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import ArticlesList from "@/components/ArticlesList"
import BlogMenuUser from "@/components/User/BlogMenuUser"


const BlogUserPage = () => {
  // const {data: session} = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/api/auth/signin?callbackUrl=/blog-user")

  //   }
  // })
  return (
    <div>
        <BlogMenuUser/>
        <ArticlesList/>
    </div>
  )
}

export default BlogUserPage
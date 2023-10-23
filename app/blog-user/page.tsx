"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import ArticlesList from "@/components/ArticlesList"



const BlogUserPage = () => {
  // const {data: session} = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/api/auth/signin?callbackUrl=/blog-user")

  //   }
  // })
  return (
    <div>
  
        <ArticlesList/>
    </div>
  )
}

export default BlogUserPage
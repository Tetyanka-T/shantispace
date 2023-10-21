import Link from "next/link"

const BlogMenuUser = () => {
  return (
    <ul className="flex flex-row justify-center">
      <li className="mr-5">
        <Link href="/articles">
        Статті
        </Link></li>
      <li className="mr-5">
        <Link href="/chat">Чат</Link>
      </li>
      <li>
        <Link href="/questions">Питання
        </Link>
      </li>
    </ul>
  )
}

export default BlogMenuUser
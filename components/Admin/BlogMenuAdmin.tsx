import Link from "next/link"

const BlogMenuAdmin = () => {
  return (
    <ul className="flex flex-row justify-center">
      {/* <li className="mr-5">
        <Link href="/articles">
        Статті
        </Link></li> */}
      <li className="mr-5">
        <Link href="/articles/editarticle">
        Редагувати статтю
        </Link></li>
      <li className="mr-5">
        <Link href="/articles/addarticle">Додати статтю
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

export default BlogMenuAdmin
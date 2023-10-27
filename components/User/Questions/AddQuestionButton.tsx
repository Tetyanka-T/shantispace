import Link from "next/link"


const AddQuestionButton = () => {
  return (
    <section className="mx-auto text-center sm:text-right">
        <button className="bg-amber-900 text-white p-4 rounded-md">
            <Link href="/questions/addquestion">Задати питання Дарині</Link>
        </button>
    </section>
    
  )
}

export default AddQuestionButton
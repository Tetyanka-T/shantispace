import GoBackButton from "../../../components/GoBackButton"
import QuestionNewList from "./QuestionNewList"
import QuestionsList from "./QuestionsList"

const getQuestions = async () => {
    try {
       const res = await fetch("https://shantispace.vercel.app/api/questions", {
        cache: "no-store",
        })

        if(!res.ok) {
            throw new Error("Failed to fetch question")
        }
        return res.json()
    } catch (error) {
        console.log("Error loading question: ", error)
    }
}

const QuestionsPage = async ({vision}: {vision: string}) => {

    const {questions} = await getQuestions()

  return (
    <section className="my-6 h-screen">
        <GoBackButton/>
        {vision === "all" && <QuestionsList questions={questions}/>}
        {vision === "new" && <QuestionNewList questions={questions}/>}
        
        
  
    </section>
  )
}

export default QuestionsPage

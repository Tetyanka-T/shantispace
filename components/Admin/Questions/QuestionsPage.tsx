import GoBackButton from "../../../components/GoBackButton"
import QuestionNewList from "./QuestionNewList"
import QuestionsList from "./QuestionsList"

const getQuestions = async () => {
    try {
       const res = await fetch("https://shantispace.com.ua/api/questions", { cache: 'no-cache' })

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
    <section className="my-6">
        <GoBackButton/>
        {vision === "all" && <QuestionsList questions={questions}/>}
        {vision === "new" && <QuestionNewList questions={questions}/>}
        
        
  
    </section>
  )
}

export default QuestionsPage

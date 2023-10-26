import QuestionsList from "../QuestionsList"

const getQuestions = async () => {
    try {
       const res = await fetch("http://localhost:3000/api/questions", {
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

const QuestionsPage = async () => {

    const {questions} = await getQuestions()


  return (
    <section className="my-4">
        <QuestionsList questions={questions}/>
    </section>
  )
}

export default QuestionsPage

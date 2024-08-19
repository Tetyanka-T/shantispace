
import QuestionsListWithAnswer from "./QuestionsListWithAnswer"

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

const QuestionsListForUsers = async () => {
    const {questions} = await getQuestions()

  return (
    <section>
      <QuestionsListWithAnswer questions={questions}/>
    </section>
  )
}

export default QuestionsListForUsers
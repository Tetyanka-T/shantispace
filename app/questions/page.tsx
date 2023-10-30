import Navigation from "@/components/Navigation"
import GoBackButton from "@/components/GoBackButton"
import QuestionsListForUsers from "@/components/User/Questions/QuestionsListForUsers"


const Questions = () => {
  return (
    <>
      <Navigation section="Питання Дарині"/>
      <GoBackButton/>
      <QuestionsListForUsers/>
    </>
   
  )
}

export default Questions
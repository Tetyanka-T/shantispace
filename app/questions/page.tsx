import Navigation from "../../components/Navigation"
import GoBackButton from "../../components/GoBackButton"
import QuestionsListForUsers from "../../components/User/Questions/QuestionsListForUsers"


const Questions = () => {
  return (
    <div className="h-screen">
      <Navigation section="Питання Дарині"/>
      <GoBackButton/>
      <QuestionsListForUsers/>
    </div>
   
  )
}

export default Questions
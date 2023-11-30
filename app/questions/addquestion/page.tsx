import GoBackButton from "../../../components/GoBackButton"
import Navigation from "../../../components/Navigation"
import AddQuestionForm from "../../../components/User/Questions/AddQuestionForm"


const AddQuestionPage = () => {
  return (
    <div className="h-screen">
        <Navigation section="Задати питання Дарині"/>
        <GoBackButton/>
        <AddQuestionForm/>
    </div>
  )
}

export default AddQuestionPage
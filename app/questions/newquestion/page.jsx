import QuestionsPage from '../../../components/Admin/Questions/QuestionsPage'
import Navigation from '../../../components/Navigation'

const NewQuestionPage = () => {
  return (
    <div className='h-screen'>
      <Navigation section='Нове питання' />
      <QuestionsPage vision='new' />
    </div>
  )
}

export default NewQuestionPage

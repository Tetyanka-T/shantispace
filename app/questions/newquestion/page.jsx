import QuestionsPage from '../../../components/Admin/Questions/QuestionsPage'
import Navigation from '../../../components/Navigation'

const NewQuestionPage = () => {
  return (
    <div className='h-full'>
      <Navigation section='Нове питання' />
      <QuestionsPage vision='new' />
    </div>
  )
}

export default NewQuestionPage

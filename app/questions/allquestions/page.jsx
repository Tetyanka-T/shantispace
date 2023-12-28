import QuestionsPage from '../../../components/Admin/Questions/QuestionsPage'
import Navigation from '../../../components/Navigation'

const AllQuestionsPage = () => {
  return (
    <div className='my-5'>
      <Navigation section='Редагування відповіді' />
      <QuestionsPage vision='all' />
    </div>
  )
}

export default AllQuestionsPage

import AnswerForm from '@/components/Admin/Questions/AnswerForm'
import Footer from '@/components/Footer'
import GoBackButton from '@/components/GoBackButton'
import Navigation from '@/components/Navigation'

const getQuestionById = async id => {
  try {
    const res = await fetch(
      `https://shantispace.vercel.app/api/questions/${id}`
    )

    if (!res.ok) {
      throw new Error('Failed to fetch topic')
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}
const AnswerPage = async ({ params }) => {
  const { id } = params
  const { question } = await getQuestionById(id)

  return (
    <div className='h-screen'>
      <Navigation section='Надайте відповідь на питання' />
      <GoBackButton />
      <div className='mt-5 border-2 border-solid p-3 rounded-lg min-[-320px]:mb-3 shadow-slate-50'>
        <p className='text-right'>{question.userName}</p>
        <p className='text-right'>{question.userEmail}</p>
        <p className='text-right'>
          {new Date(question.createdAt).toLocaleDateString('uk-Uk', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        <p className='p-2'>{question.text}</p>
      </div>
      <AnswerForm question={question} />
    </div>
  )
}

export default AnswerPage

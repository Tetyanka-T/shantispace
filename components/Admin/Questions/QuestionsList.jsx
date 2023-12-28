'use client'

import Link from 'next/link'
import DeleteQuestionButton from './DeleteQuestionButton'

const QuestionsList = ({ questions }) => {
  return (
    <>
      <h2 className='text-center font-bold my-3 text-lg'>
        Відредагуйте свою відповідь
      </h2>

      <ul className='mx-auto md:w-2/3'>
        {questions?.map(q => (
          <li key={q._id}>
            {q.adminAnswer !== '' && (
              <div className='border-2 border-solid p-3 rounded-lg min-[-320px]:mb-3 shadow-slate-50'>
                <p className='text-right'>{q.userName}</p>
                <p className='text-right'>{q.userEmail}</p>
                <p className='text-right'>
                  {new Date(q.createdAt).toLocaleDateString('uk-Uk', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className='border-b-2 p-2'>{q.text}</p>
                <p className='p-2'>{q.adminAnswer}</p>
                <div className='flex justify-end items-center'>
                  <Link
                    href={`/questions/newquestion/${q._id}`}
                    className='my-2 mr-2 border-2 rounded-md p-2 bg-amber-950 text-white'
                  >
                    Відповісти
                  </Link>
                  <DeleteQuestionButton id={q._id} />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default QuestionsList

'use client'

import AddQuestionButton from './AddQuestionButton'

const QuestionsListWithAnswer = ({ questions }) => {
  return (
    <>
      {questions.length !== 0 ? (
        <>
          <h2 className='text-center font-bold my-3 text-lg'>
            Питання задані Дарині
          </h2>
          <div className='ml-[150px] my-10'>
            <AddQuestionButton />
          </div>
        </>
      ) : (
        <>
          <h2 className='text-center font-bold my-3 text-lg'>
            Задайте своє перше запитання
          </h2>
          <AddQuestionButton />
        </>
      )}

      <ul className='mx-auto md:w-2/3'>
        {questions?.map(q => (
          <li key={q._id}>
            {q.adminAnswer && (
              <div className='border-2 border-solid p-3 rounded-lg min-[-320px]:mb-3 shadow-slate-50'>
                <p className='text-right'>{q.userName}</p>
                <p className='text-right'>
                  {new Date(q.createdAt).toLocaleDateString('uk-Uk', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className='border-b-2 my-2 text-lg'>{q.text}</p>
                <p className='text-right'>{q.adminName}</p>
                <p className='my-2 text-lg'>{q.adminAnswer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default QuestionsListWithAnswer

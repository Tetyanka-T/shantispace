"use client";

import IQuestion from "../../../app/interface/interface"


const QuestionsListWithAnswer = ({questions} : {questions: IQuestion[]}) => {


  return (
    <>
     <h2 className="text-lg text-center font-bold my-3">Питання задані Дарині</h2>
      <ul className="mx-auto md:w-2/3">
        {questions?.map(q => (
            <li key={q._id} >
                {q.adminAnswer && (
                    <div className="border-2 border-solid p-3 rounded-lg min-[-320px]:mb-3 shadow-slate-50">
                        <p className="text-right">{q.userName}</p>
                        <p className="border-b-2 my-2">{q.text}</p>
                        <p className="text-right">{q.adminName}</p>
                        <p className="my-2">{q.adminAnswer}</p>
                    </div>
                )}
            </li>
        ))}
    </ul>
    </>

  )
}

export default QuestionsListWithAnswer
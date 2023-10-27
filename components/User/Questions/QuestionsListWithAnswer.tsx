"use client";

import IQuestion from "@/app/interface/interface"

const QuestionsListWithAnswer = ({questions} : {questions: IQuestion[]}) => {


  return (
    <ul className="">
        {questions?.map(q => (
            <li key={q._id} >
                {q.adminAnswer && (
                    <div className="border-2 border-solid p-3 rounded-lg min-[-320px]:mb-3 shadow-slate-50">
                        <p className="text-right">{q.userName}</p>
                        <p className="text-right">{q.userEmail}</p>
                        <p className="border-b-2 p-2">{q.text}</p>
                        <p className="text-right">{q.adminName}</p>
                        <p className="p-2">{q.adminAnswer}</p>
                    </div>
                )}
            
            </li>
        ))}
    </ul>
  )
}

export default QuestionsListWithAnswer
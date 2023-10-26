"use client"

import IQuestion from "@/app/interface/interface"

const QuestionsList = ({questions} : {questions : IQuestion[]}) => {
  return (
    <ul>
        {questions?.map(q => (
            <li key={q._id}>
                <p>{q.userName}</p>
                <p>{q.text}</p>
            </li>
        ))}
    </ul>
  )
}

export default QuestionsList
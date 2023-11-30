"use client"
import {BsPlusCircleDotted} from "react-icons/bs"
import IQuestion from "@/app/interface/interface"
import { useState } from "react"
import AnswerForm from "./AnswerForm"
import DeleteQuestionButton from "./DeleteQuestionButton"

const QuestionsList = ({questions} : {questions : IQuestion[]}) => {
  
    const [getAnswer, setGetAnswer] = useState(false)

    const onGetAnswer = () => {
      setGetAnswer(true);
      toggleMenu();
    };
    const toggleMenu = () => {
      getAnswer ? setGetAnswer(false) : setGetAnswer(true);
    };
  return (
<>
<h2 className="text-center text-lg font-bold my-3">Відредагуйте свою відповідь</h2>
<ul className="mx-auto md:w-2/3">
       {questions?.map(q => (
            <li key={q._id}>
              {q.adminAnswer !== "" && (
                <div className="border-2 border-solid p-3 rounded-lg min-[-320px]:mb-3 shadow-slate-50">
                  <p className="text-right">{q.userName}</p>
                  <p className="text-right">{q.userEmail}</p>
                  <p className="border-b-2 p-2">{q.text}</p>
                  <p className="p-2">{q.adminAnswer}</p>
                  <div className="flex justify-end items-center">
                    <button className="my-2 mr-2" onClick={() => onGetAnswer()}>
                      <BsPlusCircleDotted size={24}/>
                    </button>
                    <DeleteQuestionButton id={q._id}/>
                </div>
                
                {getAnswer && <AnswerForm question={q}/>}
                </div>

              )}
             
            </li>
    ))}
    </ul>

</>
    
  )
}

export default QuestionsList
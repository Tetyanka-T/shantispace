
import QuestionsPage from '@/components/Admin/QuestionsPage'

import Navigation from '@/components/Navigation'

import React from 'react'

const NewQuestionPage = () => {
  return (
    <div>
        <Navigation section='Нове питання'/>
        <QuestionsPage/>
       
    </div>
  )
}

export default NewQuestionPage
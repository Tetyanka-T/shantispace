
import QuestionsPage from '@/components/Admin/Questions/QuestionsPage'

import Navigation from '@/components/Navigation'

import React from 'react'

const NewQuestionPage = () => {
  return (
    <div className='h-screen'>
        <Navigation section='Нове питання'/>
        <QuestionsPage vision='new'/>
       
    </div>
  )
}

export default NewQuestionPage
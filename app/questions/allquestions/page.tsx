import QuestionsPage from '@/components/Admin/Questions/QuestionsPage'

import Navigation from '@/components/Navigation'

import React from 'react'

const AllQuestionsPage = () => {
  return (
    <div>
        <Navigation section='Всі питання'/>
        <QuestionsPage vision="all"/>
       
    </div>
  )
}

export default AllQuestionsPage
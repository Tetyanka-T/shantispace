import QuestionsPage from '@/components/Admin/Questions/QuestionsPage'

import Navigation from '@/components/Navigation'

import React from 'react'

const AllQuestionsPage = () => {
  return (
    <div className='h-screen'>
        <Navigation section='Редагування відповіді'/>
        <QuestionsPage vision="all"/>
       
    </div>
  )
}

export default AllQuestionsPage
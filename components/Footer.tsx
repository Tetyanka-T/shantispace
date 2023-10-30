import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-amber-950 text-center py-2 text-white'>
         <p className=''>&#169; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
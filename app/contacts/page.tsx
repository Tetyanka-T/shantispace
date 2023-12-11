import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'


const ContactPage = () => {
  return (
    <div className='h-screen'>
      <Navigation section="Контакти"/>
      <div className='pt-18'>
        <Contact/>
      </div>
      
    </div>
    
  )
}

export default ContactPage
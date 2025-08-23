import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'


const ContactPage = () => {
  return (
    <div className='h-full'>
      <Navigation section="Контакти"/>
      <div className='pt-18'>
        <Contact/>
      </div>
      
    </div>
    
  )
}

export default ContactPage
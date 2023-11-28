import DesctopSidebar from './DesctopSidebar'
import MobileFooter from './MobileFooter'
import getCurrentUser from '../../actions/getCurrentUser'

async function SideBar({ children }) {
  const currentUser = await getCurrentUser()
  return (
    <div className='h-screen'>
      <DesctopSidebar currentUser={currentUser} />
      <MobileFooter />
      <main className='lg:pl-10 h-screen xl:pl-0'>{children}</main>
    </div>
  )
}

export default SideBar

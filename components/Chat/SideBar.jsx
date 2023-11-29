import DesctopSidebar from './DesctopSidebar'
import MobileFooter from './MobileFooter'
import getCurrentUser from '../../actions/getCurrentUser'

async function SideBar({ children }) {
  const currentUser = await getCurrentUser()
  return (
    <div className='mx-auto'>
      <DesctopSidebar currentUser={currentUser} />
      <MobileFooter />
      <div className='lg:pl-8 xl:pl-0'>{children}</div>
    </div>
  )
}

export default SideBar

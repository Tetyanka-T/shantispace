import SideBar from '@/components/Chat/SideBar'
import getUsers from '../../actions/getUsers'
import UserList from '../../components/Chat/UserList'

export default async function ChatLayout({ children }) {
  const users = await getUsers()
  return (
    <SideBar>
      <div className='h-full'>
        <UserList items={users} />
        {children}
      </div>
    </SideBar>
  )
}

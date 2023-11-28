import {useMemo} from 'react'
import { usePathname } from 'next/navigation'
import { HiChat } from 'react-icons/hi'
import { HiUser } from "react-icons/hi2";
import useConversation from './useConversation';

const useRoutes = () => {
    const pathname = usePathname();
    const {conversationId} = useConversation();

    const routes = useMemo(() => [
        {
            lable: "Чати",
            href: "/conversations",
            icon: HiChat,
            active: pathname === '/conversations' || !!conversationId
        }, {
            lable: "Учасники",
            href: "/chat",
            icon: HiUser,
            active: pathname === "/chat"
        }

    ], [conversationId, pathname])
    return routes
}

export default useRoutes
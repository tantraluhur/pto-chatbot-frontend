import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { signOut, useSession } from 'next-auth/react';
import { useMediaQuery } from "@mui/material";
import {Client} from "@/redux";
import { ExtendedUser } from "@/lib/authOptions";
import { toast } from "react-toastify";
import { useRouter } from "next/router";


type SideBarProps = {
    isOpen : boolean
    isHidden: boolean
    chatSectionId?: string | string[]

    setIsOpen : (isOpen: boolean) => void
    handleOpenSideBar: () => void


}

export const SideBar: React.FC<SideBarProps> = ( {isOpen, isHidden, chatSectionId, setIsOpen, handleOpenSideBar} ) => {
    const sideBarRef = useRef<HTMLDivElement>(null)
    const isSmallScreen = useMediaQuery('(min-width: 640px)');

    const {data: session} = useSession()
    const user = session?.user as ExtendedUser;
    const accessToken = user?.access_token

    const [history, setHistory] = useState({
        "today" : [],
        "yesterday" : [],
        "sevenDays" : []
    })

    const client = Client()
    const router = useRouter()

    const handleLogout = async () => {
        try{
            const response = await client.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/logout`)
            const data = response.data
            
            setTimeout(() => {
                signOut({callbackUrl: '/', redirect:true})
            }, 1000)
            toast.success(data.data)
        } catch (error: any) {
            const message = error.response?.data?.message || error.response?.data?.data || "An unexpected error occurred.";
            toast.error(message)
        }
        
    }

    const handleCreateNewChat = async () => {
        try {
            const chatSessionResponse = await client.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/chat/chat-session`)
            const chatSessionResponseData = chatSessionResponse.data.data
            const chatSessionId = chatSessionResponseData.id
            setHistory((prevHistory: any) => ({
                ...prevHistory,
                today: [...prevHistory.today, chatSessionResponseData],
              }));
            router.push(`/chat/${chatSessionId}`)
        } catch (error: any) {
            const message = error.response?.data?.message || error.response?.data?.data || "An unexpected error occurred.";
            toast.error(message)
        }
    }

    const getChatHistory = async () => {
        try {
            const chatHistoryResponse = await client.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/chat/chat-session`)
            const chatHistoryData = chatHistoryResponse.data.data
            chatHistoryData.map((item: any) => {
                const createdDate = new Date(item.created_at)
                const currentDate = new Date()

                const diff = currentDate.getTime() - createdDate.getTime();
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                if (days === 0) {
                    setHistory((prevHistory: any) => ({
                      ...prevHistory,
                      today: [...prevHistory.today, item],
                    }));
                  } else if (days === 1) {
                    setHistory((prevHistory: any) => ({
                      ...prevHistory,
                      yesterday: [...prevHistory.yesterday, item],
                    }));
                  } else if (days <= 7) {
                    setHistory((prevHistory: any) => ({
                      ...prevHistory,
                      sevenDays: [...prevHistory.sevenDays, item],
                    }));
                  }
            })
        } catch (error: any) {
            const message = error.response?.data?.message || error.response?.data?.data || "An unexpected error occurred.";
            toast.error(message)
        }
    }

    useEffect(() => {
        if (isSmallScreen) return;
        
        function handleClickOutside(event: MouseEvent) {
            if (sideBarRef.current && !sideBarRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [sideBarRef, isOpen, isSmallScreen]);

    useEffect(() => {
        if(accessToken) getChatHistory()
    }, [accessToken])

    return (
        <aside className={`${isOpen? 'w-screen h-screen fixed z-10 bg-black bg-opacity-65 sm:bg-none sm:bg-opacity-0 sm:z-0': ''} 
                        `}>
            <div className={`pto-sidebar bg-[#003A70] fixed h-full z-10 sm:z-0 ${isOpen? 'w-3/5' : 'w-0'} ${isHidden? 'hidden sm:block' : 'block'}
            ${isOpen? 'sm:w-1/5' : 'sm:w-[106px]'}`}  ref={sideBarRef}>
                <div className={`w-full h-full pt-7 ${isOpen? 'p-6' : 'p-3'} sm:p-8 sm:pt-0`}>
                    <div className="w-full h-full flex flex-col">
                        <button onClick={handleOpenSideBar} className="p-2">
                            <Image 
                            width={1000}
                            height={1000}
                            src={"/images/vector-arrow-left.png"}
                            alt="arrow-left"
                            className={`w-5 sm:w-6 sm:mt-8 ${isOpen? 'sm:animate-rotate-left' : 'sm:animate-rotate-right'}`}
                            />
                        </button>
                        <button className="mt-8 flex gap-6 w-full hover:bg-white hover:bg-opacity-10 hover:rounded-lg p-2"
                         onClick={handleCreateNewChat}>
                            <Image 
                            width={1000}
                            height={1000}
                            src={"/images/vector-create-button.png"}
                            alt="create-button"
                            className="w-5 sm:w-6"
                            />
                            <div className={`text-base sm:text-lg text-white font-bold truncate ${!isOpen? 'sm:hidden': ''}`}>
                                New Chat
                            </div>
                        </button>
                        <div className="max-h-full overflow-y-auto textarea-scrollbar my-8 ">
                            <div className={`grid gap-2 text-sm sm:text-base ${!isOpen? 'sm:hidden': ''}`}>
                                <div className="text-white font-bold truncate pl-2">
                                    Today
                                </div>
                                {
                                    history.today.map((item, index) => {
                                        return (
                                            <button key={index} 
                                            className={`text-white truncate text-left 
                                            hover:bg-white hover:bg-opacity-10 hover:rounded-lg p-2 rounded-lg
                                            ${item['id'] === chatSectionId? 'bg-white bg-opacity-10' : ''}
                                            `}
                                            onClick={() => router.push(`/chat/${item['id']}`)}>
                                                {
                                                    item['title']? item['title'] : "Untittled"
                                                }
                                            </button>
                                        )
                                    })
                                }
                            </div>
                            <div className={`mt-8 grid gap-2 text-sm sm:text-base ${!isOpen? 'sm:hidden': ''}`}>
                                <div className="text-white font-bold truncate pl-2">
                                    Yesterday
                                </div>
                                {
                                    history.yesterday.map((item, index) => {
                                        return (
                                            <button key={index} 
                                            className={`text-white truncate text-left 
                                            hover:bg-white hover:bg-opacity-10 hover:rounded-lg p-2
                                            ${item['id'] === chatSectionId? 'bg-white bg-opacity-10 rounded-lg' : ''}
                                            `}
                                            onClick={() => router.push(`/chat/${item['id']}`)}>
                                                {
                                                    item['title']? item['title'] : "Untittled"
                                                }
                                            </button>
                                        )
                                    })
                                }
                            </div>
                            <div className={`mt-8 grid gap-2 text-sm sm:text-base ${!isOpen? 'sm:hidden': ''}`}>
                                <div className="text-white font-bold truncate pl-2">
                                    Previous 7 days
                                </div>
                                {
                                    history.sevenDays.map((item, index) => {
                                        return (
                                            <button key={index} 
                                            className={`text-white truncate text-left 
                                            hover:bg-white hover:bg-opacity-10 hover:rounded-lg p-2
                                            ${item['id'] === chatSectionId? 'bg-white bg-opacity-10 rounded-lg' : ''}
                                            `}
                                            onClick={() => router.push(`/chat/${item['id']}`)}>
                                                {
                                                    item['title']? item['title'] : "Untittled"
                                                }
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <button className={`mt-auto w-full bottom-0 flex justify-center items-center gap-2 border-[1px]
                        border-[#FFFFFF57] rounded-full text-white h-10 text-base sm:h-10
                        hover:bg-[#FFFFFF57] p-2`} onClick={handleLogout}>
                            <Image 
                            width={1000}
                            height={1000}
                            src={"/images/vector-logout.png"}
                            alt="logout-button"
                            className="w-4 sm:w-5"
                            />
                            <div className={`font-bold truncate sm:text-medium ${!isOpen? 'sm:hidden' : ''}`}>
                                Logout
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    )
}
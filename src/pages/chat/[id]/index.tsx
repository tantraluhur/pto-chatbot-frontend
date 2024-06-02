import { useState } from "react";
import { ChatSection, SideBar, HeaderSection } from "@/components/chat";
import { useRouter } from "next/router";

const ChatSessionPages = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isHidden, setIsHidden] = useState<boolean>(false)
    const router = useRouter()
    const { id } = router.query
    const handleOpenSideBar = () => {
        if(isOpen){
            setIsOpen(false)
            setTimeout(() => {
                setIsHidden(true)
            }, 300)
        } else {
            setIsHidden(false)
            setTimeout(() => {
                setIsOpen(true)
            }, 10)
        }
    }

    return (
        <div className="h-screen">
            <div className="h-full w-full sm:flex">
                <div className={`pto-sidebar w-1/3 ${isOpen?'sm:w-1/4': 'sm:w-[106px]'}`}>
                    <SideBar
                    isOpen={isOpen}
                    handleOpenSideBar={handleOpenSideBar}
                    setIsOpen={setIsOpen}
                    isHidden={isHidden}
                    chatSectionId={id}
                    />
                </div>
                <div className={`p-5 h-full w-full flex flex-col z-10`}>
                    <HeaderSection 
                    handleOpenSideBar={handleOpenSideBar}
                    />
                    <ChatSection 
                    id={id}
                    />
                </div>
            </div>
        </div>
    )
}

export default ChatSessionPages;
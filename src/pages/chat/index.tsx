import axios from "axios";
import { useEffect, useState } from "react";
import { ChatSection, SideBar, HeaderSection } from "@/components/chat";

const ChatPages = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    const handleOpenSideBar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="h-screen">
            <div className="h-full w-full sm:flex">
                <div className="w-1/3">
                    <SideBar
                    isOpen={isOpen} 
                    setIsOpen={setIsOpen}
                    />
                </div>
                <div className="p-5 h-full w-full flex flex-col">
                    <HeaderSection 
                    handleOpenSideBar={handleOpenSideBar}
                    />
                    <ChatSection />
                </div>
            </div>
        </div>
    )
}

export default ChatPages;

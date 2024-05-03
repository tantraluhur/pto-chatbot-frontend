import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChatSection, SideBar } from "@/components/chat";

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
                    <div className="flex gap-4 ml-2 mt-2">
                        <button onClick={handleOpenSideBar} className="sm:hidden">
                            <Image 
                            width={18}
                            height={30}
                            src={"/images/vector-arrow-right.png"}
                            alt="arrow-right"
                            />
                        </button>
                        <div className="font-bold text-lg sm:text-xl">
                            PTO Chatbot
                        </div>
                    </div>
                    <ChatSection />
                </div>
            </div>
        </div>
    )
}

export default ChatPages;
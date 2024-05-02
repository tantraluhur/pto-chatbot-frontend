import axios from "axios";
import Image from "next/image";
import { ChatInput, QuestionBox, SideBar, Greet, UserBubbleChat, BotBubbleChat } from "./components"
import { useEffect, useState } from "react";

export const ChatSection = () => {
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
                    <div className="flex justify-center items-center h-3/4 hidden">
                        <Greet/>
                    </div>
                    <div className="h-3/4 mt-4">
                        <div className="w-full h-full flex flex-col gap-6">
                            <div className="flex justify-end">
                                <UserBubbleChat/>
                            </div>
                            <div className="flex justify-start gap-2">
                                <BotBubbleChat />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full sm:mt-auto">
                        <div className="w-full grid gap-6">
                            <div className="grid grid-cols-2 gap-2 sm:flex sm:justify-center sm:items-center">
                                <QuestionBox message="Bagaimana kategorisasi tingkat keamanan siber?"></QuestionBox>
                                <QuestionBox message="Apa yang dimaksud dengan laporan insiden siber?"></QuestionBox>
                                <QuestionBox message="Apa yang dimaksud dengan keamanan siber?"></QuestionBox>
                                <QuestionBox message="Apa yang dilakukan Bank untuk menjaga ketahanan siber?"></QuestionBox>
                            </div>
                            <ChatInput
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
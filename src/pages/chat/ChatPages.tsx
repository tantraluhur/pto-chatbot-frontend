import axios from "axios";
import Image from "next/image";
import { ChatInput, QuestionBox, SideBar, Greet } from "./components"
import { useEffect, useState } from "react";

export const ChatSection = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    const handleOpenSideBar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="h-screen">
            <div>
                <SideBar
                isOpen={isOpen} 
                setIsOpen={setIsOpen}
                />
                <div className="p-5 h-full">
                    <div className="flex gap-4 ml-2 mt-2">
                        <button onClick={handleOpenSideBar} className="sm:hidden">
                            <Image 
                            width={18}
                            height={30}
                            src={"/images/vector-arrow-right.png"}
                            alt="arrow-right"
                            />
                        </button>
                        <div className="font-bold text-lg">
                            PTO Chatbot
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-3/5">
                        <Greet/>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="w-10/12 absolute bottom-0 mb-4 grid gap-4 sm:mb-8">
                            <div className="grid grid-cols-2 gap-2 sm:flex sm:justify-center sm:items-cen">
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
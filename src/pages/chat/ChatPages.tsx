import axios from "axios";
import { ChatInput, QuestionBox } from "./components"
import { useEffect } from "react";


export const ChatSection = () => {

    return (
        <div className="flex justify-center items-center">
            <div className="w-10/12 absolute bottom-0 mb-4 grid gap-4 sm:mb-8">
                <div className="grid grid-cols-2 gap-2 sm:flex sm:justify-center sm:items-cen">
                    <QuestionBox message="Bagaimana kategorisasi tingkat keamanan siber?"></QuestionBox>
                    <QuestionBox message="Apa yang dimaksud dengan laporan insiden siber?"></QuestionBox>
                    <QuestionBox message="Apa yang dimaksud dengan keamanan siber?"></QuestionBox>
                    <QuestionBox message="Apa yang dilakukan Bank untuk menjaga ketahanan siber?"></QuestionBox>
                </div>
                <ChatInput></ChatInput>
            </div>
        </div>
    )
}
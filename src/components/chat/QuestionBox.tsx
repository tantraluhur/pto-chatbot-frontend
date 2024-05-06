import { useRef, useState, useEffect, ChangeEvent } from "react";

type QuestionBoxProps = {
    message: string
    sendMessage: (message:string) => void
}

export const QuestionBox: React.FC<QuestionBoxProps> = ( {message, sendMessage} ) => {
    
    return (
        <button className="border-[1px] border-black rounded-2xl h-auto flex w-auto font-medium text-start" onClick={() => sendMessage(message)}>
            <div className="m-2 text-xs sm:text-sm lg:text-base">
                {message}
            </div>
        </button>
    )
}
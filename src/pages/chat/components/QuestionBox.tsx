import { useRef, useState, useEffect, ChangeEvent } from "react";

type QuestionBoxProps = {
    message: string
}

export const QuestionBox: React.FC<QuestionBoxProps> = ( {message} ) => {
    
    return (
        <div className="border-[1px] border-black rounded-2xl h-auto flex">
            <div className="m-2 mr-4 text-xs sm:mr-6 sm:text-sm">
                {message}
            </div>
        </div>
    )
}
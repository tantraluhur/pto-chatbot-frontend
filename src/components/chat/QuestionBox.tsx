import { useRef, useState, useEffect, ChangeEvent } from "react";

type QuestionBoxProps = {
    message: string
}

export const QuestionBox: React.FC<QuestionBoxProps> = ( {message} ) => {
    
    return (
        <div className="border-[1px] border-black rounded-2xl h-auto flex w-auto font-medium">
            <div className="m-2 text-xs sm:text-sm lg:text-base">
                {message}
            </div>
        </div>
    )
}
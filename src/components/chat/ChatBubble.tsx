import { Loader, PTOProfile } from "@/components/chat";
import { Message } from "./types/ChatTypes";

export const ChatBubble: React.FC<Message> = (item) => {

    return (
        <>
            <div className="flex justify-end">
                <div className="w-auto max-w-xl text-wrap break-words h-auto bg-[#F3F3F3] rounded-l-[30px] rounded-tr-[30px] p-3 px-5 font-semibold">
                    {item.messageUser}
                </div>
            </div>
            <div className="flex justify-start gap-2">
                <div className="flex gap-4 justify-center items-center">
                    <div className="flex justify-center items-center">
                        <PTOProfile />
                    </div>
                    {
                        item.typing?
                        <div className="flex justify-center items-center">
                            <Loader />
                        </div>
                        :
                        <div className="w-auto  text-wrap break-words 
                        max-w-xl h-auto bg-[#F3F3F3] rounded-r-[30px] rounded-tl-[30px] 
                        p-3 px-5 font-semibold flex justify-center items-center">
                            {item.messageBot}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
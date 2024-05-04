import { Loader, PTOProfile } from "@/components/chat";
import { Message } from "./types/ChatTypes";

export const ChatBubble: React.FC<Message> = (item) => {

    return (
        <>
            <div className="flex justify-end">
                <div className="w-auto max-w-xl h-auto bg-[#F3F3F3] rounded-l-full rounded-tr-full p-3 px-5 font-semibold">
                    {item.messageUser}
                </div>
            </div>
            <div className="flex justify-start gap-2">
                <div className="flex gap-4">
                    <div className="flex justify-center items-center">
                        <PTOProfile />
                    </div>
                    {
                        item.typing?
                        <div className="flex justify-center items-center">
                            <Loader />
                        </div>
                        :
                        <div className="w-auto max-w-xl h-auto bg-[#F3F3F3] rounded-r-full rounded-tl-full p-3 px-5 font-semibold">
                            {item.messageBot}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
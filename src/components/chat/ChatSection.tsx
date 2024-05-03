import { Greet, UserBubbleChat, BotBubbleChat, QuestionBox, ChatInput} from "@/components"


export const ChatSection = () => {
    return (
    <>
        <div className="h-full mt-4">
            {/* Ganti ganti hiddennya tergantung ada chat atau ngga */}
            <div className="flex justify-center items-center h-full hidden">
                <Greet/>
            </div>
            <div className="h-full w-full">
                <div className="flex flex-col gap-6">
                    <div className="flex justify-end">
                        <UserBubbleChat/>
                    </div>
                    <div className="flex justify-start gap-2">
                        <BotBubbleChat />
                    </div>
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
    </>
    )
}
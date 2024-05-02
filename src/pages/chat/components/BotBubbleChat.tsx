import { PTOProfile } from "./PTOProfile"


export const BotBubbleChat = () => {
    return (
        <div className="flex gap-2">
            <div className="flex justify-center items-center">
                <PTOProfile />
            </div>
            <div className="w-auto h-auto bg-[#F3F3F3] rounded-r-full rounded-tl-full p-3 px-5 font-semibold">
                Bagaimana kategorisasi tingkat keamanan siber?
            </div>
        </div>
    )
}
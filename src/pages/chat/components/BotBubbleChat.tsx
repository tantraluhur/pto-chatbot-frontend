import { PTOProfile } from "./PTOProfile"
import { Loader } from "./Loader"

export const BotBubbleChat = () => {
    return (
        <div className="flex gap-4">
            <div className="flex justify-center items-center">
                <PTOProfile />
            </div>
            {/* <div className="w-auto max-w-xl h-auto bg-[#F3F3F3] rounded-r-full rounded-tl-full p-3 px-5 font-semibold">
                Bagaimana kategorisasi tingkat keamanan siber?
            </div> */}
            <div className="flex justify-center items-center">
                <Loader />
            </div>
        </div>
    )
}
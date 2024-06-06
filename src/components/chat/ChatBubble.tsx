import { Loader, PTOProfile } from "@/components/chat";
import { Message } from "./types/ChatTypes";

export const ChatBubble: React.FC<Message> = (item) => {
    const MLIP = "http://192.168.153.217:8081"
    const formatMessage = item.messageBot?.split("\n")
    let formatImage = item.imageBot?.split(",")
    const formatedImage = formatImage?.map((item) => {
        if(item != "")
        return `${MLIP}/${item.slice(22)}`
    })
    console.log(formatedImage)
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
                        max-w-xl h-auto bg-[#DCE7F0] rounded-r-[30px] rounded-tl-[30px] 
                        p-3 px-5 font-semibold">
                            {
                                formatMessage?.map((item, index) => {
                                    if(item === "" && index != formatMessage.length-1){
                                        return (
                                            <br key={index}></br>
                                        )
                                    }
                                    else {
                                        return (
                                            <div key={index}>{item}</div>
                                        )
                                    }
                                })
                            }
                            <div className="">
                            {
                                formatedImage?.map((item, index) => {
                                    if(item)
                                    return(
                                        <div key={index}>
                                            <img src={item}></img>
                                            <br></br>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
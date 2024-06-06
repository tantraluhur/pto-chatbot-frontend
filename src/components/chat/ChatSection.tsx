import { Greet, QuestionBox, ChatInput, ChatBubble } from "@/components/chat"
import { useState, useRef, useEffect } from "react";

import { Message } from "./types/ChatTypes";
import { Client } from "@/redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { ExtendedUser } from "@/lib/authOptions";
import { LoadingSpinnerPages } from "../loader";

export const ChatSection = ({id}: {id?: string | string[]}) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const client = Client()
    
    const {data: session} = useSession()
    const user = session?.user as ExtendedUser;
    const accessToken = user?.access_token

    const questionItem = [
        "Bagaimana kategorisasi tingkat keamanan siber?",
        "Apa yang dimaksud dengan laporan insiden siber?",
        "Apa yang dimaksud dengan keamanan siber?",
        "Apa yang dilakukan Bank untuk menjaga ketahanan siber?"
    ]

    const sendMessage = async (input: string) => {
        if (input.trim() === '') return;
        const newMessage: Message = { messageUser: input, typing: true };
        let chatSessionId = id?id: ''
        setMessages([...messages, newMessage]);
        try {
            const messageResponse = await client.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/chat/${chatSessionId}`, {
                    "message" : newMessage.messageUser
                }
            )
            const messageResponseData = messageResponse.data.data
            const botMessage = messageResponseData.bot_message
            const imageBot = messageResponseData.image
            setMessages(messages => {
                const updatedMessages = messages.map((msg, idx) => 
                    idx === messages.length - 1 ? { ...msg, messageBot: botMessage, imageBot: imageBot, typing: false } : msg
                );
                return updatedMessages;
            });
        } catch (error: any) {
            setMessages(messages => {
                const updatedMessages = messages.map((msg, idx) => 
                    idx === messages.length - 1 ? { ...msg, messageBot: "An unexpected error occurred", imageBot: "", typing: false } : msg
                );
                return updatedMessages;
            });
            const message = error.response?.data?.message || error.response?.data?.data || "An unexpected error occurred.";
            toast.error(message)
        }
      };

    
    
    const getMessage = async (id: string | string[]) => {
        try {
            const response = await client.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/chat/${id}`);
            const messages = response.data.data;
            const mappingMessages = messages.map((msg:any) => ({
                "messageUser": msg.user_message,
                "messageBot": msg.bot_message,
                "imageBot": msg.image,
                "typing": false
            }))
            setMessages(mappingMessages)
          } catch (error: any) {
            const message = error.response?.data?.message || error.response?.data?.data || "An unexpected error occurred.";
            toast.error(message);
          }
    }


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();

    }, [messages]);

    useEffect(() => {
        if(id && accessToken){
            setLoading(true)
            getMessage(id)
        }
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [id, accessToken])

    if(loading){
        return (
            <div className="h-full flex justify-center items-center">
                <LoadingSpinnerPages></LoadingSpinnerPages>
            </div>
        )
    }

    return (
    <>
        <div className="h-full mt-4 mb-4 max-h-1/2 overflow-y-auto chat-messages">
            {/* Ganti ganti hiddennya tergantung ada chat atau ngga */}
            <div className={`justify-center items-center h-full ${messages.length==0? "flex" : "hidden"}`}>
                <Greet
                username={user.username}
                />
            </div>
            <div className={`h-full w-full ${messages.length==0? "hidden" : ""}`}>
                <div className="flex flex-col gap-6">
                    {
                        messages.map((item, index) => 
                            <ChatBubble
                            key={index}
                            {...item}
                            />
                      )
                    }
                    <div ref={messagesEndRef} />
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center w-full sm:mt-auto">
            <div className="w-full grid gap-6">
                <div className={`grid grid-cols-2 gap-2 ${messages.length==0? "" : "hidden sm:hidden"}
                sm:flex sm:justify-center sm:items-center
                `}>
                    {questionItem.map((item, index) => 
                        <QuestionBox 
                        key={index}
                        message={item}
                        sendMessage={sendMessage}/>
                    )}
                </div>
                <ChatInput
                sendMessage={sendMessage}
                />
            </div>
        </div>
    </>
    )
}
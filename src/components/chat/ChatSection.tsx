import { Greet, QuestionBox, ChatInput, ChatBubble } from "@/components/chat"
import { useState, useRef, useEffect } from "react";

import { Message } from "./types/ChatTypes";


export const ChatSection = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const questionItem = [
        "Bagaimana kategorisasi tingkat keamanan siber?",
        "Apa yang dimaksud dengan laporan insiden siber?",
        "Apa yang dimaksud dengan keamanan siber?",
        "Apa yang dilakukan Bank untuk menjaga ketahanan siber?"
    ]

    const sendMessage = (input: string) => {
        if (input.trim() === '') return;
        const newMessage: Message = { messageUser: input, typing: true };
        setMessages([...messages, newMessage]);
        setLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            setMessages(messages => {
                const updatedMessages = messages.map((msg, idx) => 
                    idx === messages.length - 1 ? { ...msg, messageBot: "Hello! How can I assist you today?", typing: false } : msg
                );
                return updatedMessages;
                });
                setLoading(false);
        }, 3000);
      };


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
    <>
        <div className="h-full mt-4 mb-4 max-h-1/2 overflow-y-auto chat-messages">
            {/* Ganti ganti hiddennya tergantung ada chat atau ngga */}
            <div className={`justify-center items-center h-full ${messages.length==0? "flex" : "hidden"}`}>
                <Greet/>
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
                    {questionItem.map((item) => 
                        <QuestionBox 
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
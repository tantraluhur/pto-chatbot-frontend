import { ChatInput, QuestionBox } from "./components"


export const ChatSection = () => {
    return (
        <div className="w-10/12 absolute bottom-0 m-8 grid gap-4">
            <div className="grid grid-cols-2 gap-2">
                <QuestionBox></QuestionBox>
                <QuestionBox></QuestionBox>
                <QuestionBox></QuestionBox>
                <QuestionBox></QuestionBox>
            </div>
            <ChatInput></ChatInput>
        </div>
    )
}
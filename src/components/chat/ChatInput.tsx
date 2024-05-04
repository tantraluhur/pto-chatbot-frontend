import { useRef, useState, useEffect, KeyboardEvent } from "react";


type ChatInputProps = {
  sendMessage: (message: string) => void
}

export const ChatInput: React.FC<ChatInputProps> = ( {sendMessage} ) => {
    const [text, setText] = useState('');
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSendMessage = () => {
      sendMessage(text)
      setText('')
      if(textAreaRef.current) textAreaRef.current.value = ""
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
      if (e.key === 'Enter') {
        e.preventDefault();  // Prevent the default Enter key behavior
        handleSendMessage();
      }
    };

    useEffect(() => {
        const textArea = textAreaRef.current;
        const container = containerRef.current;
        
        if (textArea && container) {
            const offset = textArea.offsetHeight - textArea.clientHeight;
            textArea.style.height = 'auto';
            textArea.style.height = textArea.scrollHeight + offset + 'px';
            if(textArea.offsetHeight > 51) {
              textArea.style.borderRadius = "20px"
            } else {
              textArea.style.borderRadius = "9999px"
            }
            container.style.paddingBottom = textArea.offsetHeight - textArea.scrollHeight + 'px';
        }
    }, [text]);
    
    return (
        <div className="relative rounded-lg bottom-0 w-full"  ref={containerRef}>
          <textarea
            ref={textAreaRef}
            placeholder="Enter a prompt here..."
            className="textarea-scrollbar font-semibold text-sm lg:text-base max-h-40 w-full p-3 pr-14 resize-none 
            focus:outline-none focus:ring-0 border-[1px] rounded-full border-black"
            onChange={(e) => setText(e.target.value)}
            rows={1}
            onKeyDown={handleKeyDown}
            style={{
                minHeight: '3rem', // Adjust this value for initial height
                lineHeight: '1.5', // Adjust line height as per design
                boxSizing: 'border-box'
            }}
          />
          <div className="absolute bottom-0 right-0 p-3">
            <button className="flex items-center justify-center w-10 h-10" onClick={handleSendMessage}>
                <svg 
                    width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5472 9.25614L1.23565 0.0880238C1.09213 0.0161514 0.930926 -0.0126464 0.77144 0.00509822C0.611954 0.0228428 0.46099 0.0863731 0.336726 0.188039C0.218054 0.287632 0.129478 0.418398 0.080955 0.565636C0.0324321 0.712873 0.0258861 0.870746 0.0620531 1.0215L2.26776 9.16446H11.6815V10.8314H2.26776L0.0287594 18.9493C-0.00517809 19.0752 -0.00913965 19.2074 0.0171934 19.3351C0.0435265 19.4628 0.0994195 19.5825 0.180378 19.6847C0.261336 19.7868 0.365101 19.8685 0.483329 19.9232C0.601557 19.9779 0.730949 20.004 0.861101 19.9995C0.991398 19.9987 1.11969 19.9673 1.23565 19.9078L19.5472 10.7397C19.6835 10.6698 19.7979 10.5635 19.8778 10.4326C19.9577 10.3017 20 10.1513 20 9.99792C20 9.84453 19.9577 9.69411 19.8778 9.56323C19.7979 9.43235 19.6835 9.32608 19.5472 9.25614Z" fill="black"/>
                </svg>
            </button>
          </div>
        </div>
    )
}
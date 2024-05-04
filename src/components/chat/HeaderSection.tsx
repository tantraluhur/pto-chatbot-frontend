import Image from "next/image"

type HeaderSectionProps = {
    handleOpenSideBar: () => void
}

export const HeaderSection: React.FC<HeaderSectionProps> = ( {handleOpenSideBar} ) => {
    return(
    <div className="flex gap-4 ml-2 mt-2">
        <button onClick={handleOpenSideBar} className="sm:hidden">
            <Image 
            width={18}
            height={30}
            src={"/images/vector-arrow-right.png"}
            alt="arrow-right"
            />
        </button>
        <div className="font-bold text-lg sm:text-xl">
            PTO Chatbot
        </div>
    </div>
    )
}
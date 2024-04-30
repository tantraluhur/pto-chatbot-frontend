import Image from "next/image"
import { useEffect, useRef } from "react"

type SideBarProps = {
    isOpen : boolean
    setIsOpen : (isOpen: boolean) => void
}

export const SideBar: React.FC<SideBarProps> = ( {isOpen, setIsOpen} ) => {
    const sideBarRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (sideBarRef.current && !sideBarRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [sideBarRef]);

    const handleOpenSideBar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`${isOpen? 'w-screen h-screen fixed z-10 bg-black bg-opacity-65': ''} 
                        sm:bg-none sm:bg-opacity-0`}>
            <div className={`pto-sidebar bg-[#003A70] fixed h-full z-10 sm:z-0 ${isOpen? 'w-3/5' : 'w-0'} sm:w-1/3`}  ref={sideBarRef}>
                <div className={`w-full h-full pt-8 ${isOpen? 'p-4' : 'p-3'} sm:p-8 sm:pt-12`}>
                    <div className="w-full h-full flex flex-col">
                        <button onClick={handleOpenSideBar}>
                            <Image 
                            width={18}
                            height={30}
                            src={"/images/vector-arrow-left.png"}
                            alt="arrow-left"
                            />
                        </button>
                        <button className="mt-10 flex gap-4 w-full">
                            <Image 
                            width={25}
                            height={0}
                            src={"/images/vector-create-button.png"}
                            alt="create-button"
                            className="h-6"
                            />
                            <div className="text-base sm:text-xl text-white font-bold truncate">
                                New Chat
                            </div>
                        </button>
                        <div className="mt-10 grid gap-2 text-sm sm:text-lg">
                            <div className="text-white font-bold truncate">
                                Previous 7 days
                            </div>
                            <div className="text-white truncate">
                                Apa yang dilakukan Bank
                            </div>
                            <div className="text-white truncate">
                                Apa yang dimaksud dengan
                            </div>
                        </div>
                        <div className="mt-10 grid gap-2 text-sm sm:text-lg">
                            <div className="text-white font-bold truncate">
                                Previous 7 days
                            </div>
                            <div className="text-white truncate">
                                Apa yang dilakukan Bank
                            </div>
                            <div className="text-white truncate">
                                Apa yang dimaksud dengan
                            </div>
                        </div>
                        <button className="mt-auto w-full bottom-0 flex justify-center items-center gap-2 border-[1px]
                        border-[#FFFFFF57] rounded-full text-white h-10 text-base">
                            <Image 
                            width={20}
                            height={0}
                            objectFit="cover"
                            src={"/images/vector-logout.png"}
                            alt="logout-button"
                            className="h-5"
                            />
                            <div className="font-bold truncate">
                                Logout
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
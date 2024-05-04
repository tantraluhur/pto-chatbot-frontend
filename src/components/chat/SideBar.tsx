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
        <aside className={`${isOpen? 'w-screen h-screen fixed z-10 bg-black bg-opacity-65': ''} 
                        sm:bg-none sm:bg-opacity-0`}>
            <div className={`pto-sidebar bg-[#003A70] fixed h-full z-10 sm:z-0 ${isOpen? 'w-3/5' : 'w-0'} sm:w-1/4`}  ref={sideBarRef}>
                <div className={`w-full h-full pt-8 ${isOpen? 'p-6' : 'p-3'} sm:p-8 sm:pt-0`}>
                    <div className="w-full h-full flex flex-col">
                        <button onClick={handleOpenSideBar} className="sm:hidden">
                            <Image 
                            width={1000}
                            height={1000}
                            src={"/images/vector-arrow-left.png"}
                            alt="arrow-left"
                            className="w-5 sm:w-7"
                            />
                        </button>
                        <button className="mt-10 flex gap-4 w-full">
                            <Image 
                            width={1000}
                            height={1000}
                            src={"/images/vector-create-button.png"}
                            alt="create-button"
                            className="w-5 sm:w-7"
                            />
                            <div className="text-base sm:text-lg text-white font-bold truncate">
                                New Chat
                            </div>
                        </button>
                        <div className="mt-10 grid gap-2 text-sm sm:text-base">
                            <div className="text-white font-bold truncate">
                                Yesterday
                            </div>
                            <button className="text-white truncate text-left">
                                Apa yang dilakukan Bank
                            </button>
                            <button className="text-white truncate text-left">
                                Apa yang dimaksud dengan
                            </button>
                        </div>
                        <div className="mt-10 grid gap-2 text-sm sm:text-base">
                            <div className="text-white font-bold truncate">
                                Previous 7 days
                            </div>
                            <button className="text-white truncate text-left">
                                Apa yang dilakukan Bank
                            </button>
                            <button className="text-white truncate text-left">
                                Apa yang dimaksud dengan
                            </button>
                        </div>
                        <button className="mt-auto w-full bottom-0 flex justify-center items-center gap-2 border-[1px]
                        border-[#FFFFFF57] rounded-full text-white h-10 text-base sm:h-12">
                            <Image 
                            width={1000}
                            height={1000}
                            src={"/images/vector-logout.png"}
                            alt="logout-button"
                            className="w-4 sm:w-5"
                            />
                            <div className="font-bold truncate sm:text-medium">
                                Logout
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    )
}
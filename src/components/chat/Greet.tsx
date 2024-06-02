

export const Greet = ({username} : {username: string}) => {
    return (
        <div className="font-bold text-2xl text-[#606060] text-center sm:text-3xl">
            Hello <span className="text-[#FF964A]"> {username}, </span>
            <div className="italic">
                How Can I Help You Today?
            </div>
        </div>
    )
}
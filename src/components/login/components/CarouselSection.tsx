import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'


export const CarouselSection = () => {
    var items = [
        "/images/login-icon1.png",
        "/images/login-icon2.png",
        "/images/login-icon3.png"
    ]
    return (
        <div className='rounded-xl sm:rounded-l-xl sm:rounded-r-none bg-[#DCE7F0] shadow-xl md:shadow-none'>
            <Carousel
            navButtonsAlwaysInvisible={true}
            swipe={false}
            sx={{ overflowY: 'visible', overflowX: 'clip' }} 
            className="h-full w-full"

            >
                {
                    items.map( (item) => {
                        return (
                            <div className='md:pt-10 md:pb-10 flex justify-center items-center h-full w-full'>
                                <Image 
                                    width={300}
                                    height={300}
                                    alt={item} 
                                    src={item}
                                    className="w-3/5"
                                />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
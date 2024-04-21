import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'


export const CarouselSection = () => {
    var items = [
        "/images/login-icon1.png",
        "/images/login-icon2.png",
        "/images/login-icon3.png"
    ]
    return (
        <div className='w-full rounded-xl bg-[#DCE7F0]'>
            <Carousel
            navButtonsAlwaysInvisible={true}
            swipe={false}
            sx={{ overflowY: 'visible', overflowX: 'clip' }} 

            >
                {
                    items.map( (item) => {
                        return (
                            <div className='flex justify-center items-center'>
                                <Image 
                                    width={450}
                                    height={200}
                                    alt={item} 
                                    src={item}
                                />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'

// import required modules
import { Pagination } from 'swiper/modules';
import SectionHeading from '../../assets/components/SectionHeading';
const Category = () => {
    return (
        <div className='md:px-36'>
            <SectionHeading
                subheading={"From 11.00am to 10.00pm"}
                heading={"Order Online"}
            ></SectionHeading>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className=''>
                    <img src={slide1} className='w-full' alt="" />
                    <h3 className="text-4xl text-center -mt-16 text-white shadow-md overflow-hidden  bg-black bg-opacity-50 drop-shadow-lg">Salads</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide2} className='w-full' alt="" />
                    <h3 className="text-4xl text-center -mt-16 text-white bg-black bg-opacity-50 shadow-md drop-shadow-lg">Pizzas</h3></SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} className='w-full' alt="" />
                    <h3 className="text-4xl text-center -mt-16 text-white bg-black bg-opacity-50 shadow-md drop-shadow-lg">Soups</h3>
                </SwiperSlide>
                <SwiperSlide><img className='w-full' src={slide4} alt="" />
                    <h3 className="text-4xl text-center -mt-16 text-white bg-black bg-opacity-50 shadow-md drop-shadow-lg">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide><img className='w-full' src={slide5} alt="" />
                    <h3 className="text-4xl text-center -mt-16 text-white bg-black bg-opacity-50 shadow-md drop-shadow-lg">Salads</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide2} className='w-full' alt="" />
                    <h3 className="text-4xl text-center -mt-16 text-white bg-black bg-opacity-50 shadow-md drop-shadow-lg">Pizzas</h3></SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} className='w-full' alt="" />
                    <h3 className="text-4xl text-center -mt-16 text-white bg-black bg-opacity-50 shadow-md drop-shadow-lg">Soups</h3>
                </SwiperSlide>
                <SwiperSlide><img className='w-full' src={slide4} alt="" />
                    <h3 className="text-4xl text-center -mt-16 text-white bg-black bg-opacity-50 shadow-md drop-shadow-lg">Desserts</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
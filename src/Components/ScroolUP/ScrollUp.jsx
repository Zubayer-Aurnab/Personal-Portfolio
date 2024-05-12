import { GrLinkTop } from "react-icons/gr";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
//images for slider
import PH from '../../assets/pdfs/PNG/Programming Hero.png'
import Presentation from '../../assets/pdfs/PNG/Presentation And PublicSpeaking Certificate.jpg'
import Communication from '../../assets/pdfs/PNG/Communication Secrets.png'
import Abriti from '../../assets/pdfs/PNG/জুবায়ের আলম অর্ণব.jpg'

const ScrollUp = () => {
    function scrollToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div className="lg:flex justify-between items-center my-10 w-4/5 mx-auto ">
            <div className="lg:w-[50%] ">
                <h1 className="text-white mb-2 lg:text-xl font">Achievements & Certificates</h1>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination,]}
                    loop={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    className="mySwiper"
                >
                    <SwiperSlide className="" >
                        <a href="https://drive.google.com/file/d/1EcioiJYmwxZk2Mz-JdHyKjn8THeo5C9t/view?usp=sharing" target="_blank" rel="noreferrer">
                            <img src={PH} alt="Programming hero " className=" h-28 md:h-52 lg:h-[16.2rem] object-cover" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://drive.google.com/file/d/1C9Ns-8zTnFXLDcWTcMKwEUYi_TTK8cjA/view?usp=sharing" target="_blank" rel="noreferrer">
                            <img src={Presentation} alt="" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://drive.google.com/file/d/1Yxwt0wHLLa-k77qIHyaoHbVQLdlFfHg8/view?usp=sharing" target="_blank" rel="noreferrer">
                            <img src={Communication} alt="" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://drive.google.com/file/d/1hazdOQe2LiI-HnrCvHqSsA8a3tf0V2rr/view?usp=sharing" target="_blank" rel="noreferrer">
                            <img src={Abriti} alt="" />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div onClick={scrollToTop} className="btn hidden lg:flex">
                <GrLinkTop />
            </div>

        </div >
    );
};

export default ScrollUp;
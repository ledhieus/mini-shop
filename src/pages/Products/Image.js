import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './image.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import { getProductBySlug } from '../../services/product';

function Image() {
    const slugProduct = useParams()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [imageProduct, setImageProduct] = useState([{ images: [] }])
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductBySlug(slugProduct.slugProduct)
            setImageProduct(result)
        }
        fetchApi()
    }, [slugProduct.slugProduct])
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {imageProduct[0].images.map((item, index) => (
                    <SwiperSlide key={index} className='main'>
                        <img src={item} alt={`image-${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={20}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {imageProduct[0].images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt={`thumb-${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
export default Image
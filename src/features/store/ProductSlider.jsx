import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { StyledProductSlider } from "../../styles/Styles";

function ProductSlider({ productImages }) {
  return (
    <StyledProductSlider>
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        loop={true}
      >
        {productImages?.map((img, index) => (
          <SwiperSlide key={index}>
            <figure>
              <img src={img} alt={img} />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledProductSlider>
  );
}

export default ProductSlider;

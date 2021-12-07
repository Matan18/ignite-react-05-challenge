import { CarouselItem } from "./CarouselItem";
import { Box } from "@chakra-ui/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {
  continents: ISimpleContinent[];
};

export const Carousel = ({ continents }: Props) => (
  <Box
    m={["0 auto 24px", "0 auto 24px", "0 auto 40px"]}
    h={["250px", "450px"]}
    w="100%"
    maxW="1240px"
  >
    <Swiper
      autoplay
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, Controller]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {continents.map(continent => (
        <SwiperSlide key={continent.uid}>
          <CarouselItem continent={continent} />
        </SwiperSlide>
      ))}
    </Swiper>
  </Box >
);
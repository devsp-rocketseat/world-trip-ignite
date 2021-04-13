import { Flex } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'

import { SliderItem } from './SliderItem'

SwiperCore.use([Navigation, Pagination, Autoplay])

export function Slider() {
  return (
    <Flex w="100%" h={["250px", "450px"]} maxW="1240px" mx="auto" mb={["5", "10"]}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <SliderItem
            continent="europa"
            title="Europa"
            summary="O continente mais antigo."
            image="/images/europa.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem
            continent="asia"
            title="Ásia"
            summary="O maior dos continentes."
            image="/images/asia.jpg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SliderItem
            continent="africa"
            title="Africa"
            summary="O continente mais quente."
            image="/images/africa.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}

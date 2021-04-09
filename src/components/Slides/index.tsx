import { Link, Center, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
import styles from "../../styles/styles.module.css";

SwiperCore.use([Navigation, Pagination]);

SwiperCore.use([EffectFade]);

export function Slides() {
  const images = [
    { id: "23131", url: "/ContinentImage.png" },
    { id: "231312", url: "/ContinentImage.png" },
    { id: "231313", url: "/ContinentImage.png" },
  ];

  return (
    <Flex my="14" mx="20">
      <Swiper
        id="main"
        className={styles.swiperContainer}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        slidesPerView={1}
        spaceBetween={0}
        onInit={(swiper) => console.log("Swiper initialized", swiper)}
        onSlideChange={(swiper) =>
          console.log("slide index changed to:", swiper.activeIndex)
        }
        onReachEnd={() => console.log("swiper and reached")}
      >
        <SwiperSlide className={styles.swiperWrapper}>
          <img src="/ContinentImage.png" alt="ContinentImage.png" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperWrapper}>
          <img src="/ContinentImage.png" alt="ContinentImage.png" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperWrapper}>
          <img src="/ContinentImage.png" alt="ContinentImage.png" />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}

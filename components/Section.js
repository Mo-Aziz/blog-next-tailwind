import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

export default function Section() {
  // banner bg image
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

  // swiper call for autoplay
  SwiperCore.use([Autoplay]);

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 6000,
          }}
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          ...
        </Swiper>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <Image src={"/images/img1.jpg"} width={600} height={600} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            Business, Travel
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            - July 3, 2023
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <h2 className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              {" "}
              Experience the southern generousity, and Texan cheerful attitude
            </h2>
          </Link>
        </div>
        <div className="py-3 text-gray-500">
          <p>
            Exploring Austin's Quirky Attractions.
            <br />
            Austin, Texas is an amazing place to visit! With its beautiful
            scenery and diverse culture, Austin is an exciting destination for
            all. Whether you're looking for a fun adventure or just a relaxing
            weekend to take in the sights and sounds of the city
          </p>
        </div>
        <Author />
      </div>
    </div>
  );
}

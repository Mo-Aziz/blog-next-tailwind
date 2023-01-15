import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Author from "./_child/Author";

export default function Mviewed() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl pb-12 text-center">Most Viewed</h1>

      {/*  swiper */}

      <Swiper
        slidesPerView={2}
        autoplay={{
          delay: 4000,
        }}
      >
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
      </Swiper>
    </section>
  );
}

// single post

function Post() {
  return (
    <div className="grid">
      <div className="images">
        <Link href={"/"}>
          <Image src={"/images/img1.jpg"} width={600} height={400} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-gray-600">
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

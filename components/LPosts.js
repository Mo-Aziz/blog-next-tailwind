import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./_child/Author";

export default function LPosts() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/images/img1.jpg"}
            width={500}
            height={350}
            className="rounded"
          />
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
            <h2 className="text-xl font-bold text-gray-800 hover:text-gray-600">
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

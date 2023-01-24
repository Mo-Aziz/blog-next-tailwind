import Image from "next/image";
import Link from "next/link";
import Related from "../../../components/Related";
import Author from "../../../components/_child/Author";
import Layout from "../../../layout/Layout";

export default function Page() {
  return (
    <Layout>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author />
        </div>
        <div className="post flex flex-col justify-center items-center py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            Come and enjoy the sunny lone star state
          </h1>
          <p className=" text-gray-500 text-xl text-center">
            Exploring Austin's Quirky Attractions. Austin, Texas is an amazing
            place to visit! With its beautiful scenery and diverse culture,{" "}
          </p>
          {/* article image */}
          <div className="py-10">
            <Image src={"/images/img1.jpg"} width={900} height={600} />
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-6 ">
            <p>
              Exploring Austin's Quirky Attractions. Austin, Texas is an amazing
              place to visit! With its beautiful scenery and diverse culture,
              Austin is an exciting destination for all. Whether you're looking
              for a fun adventure or just a relaxing weekend to take in the
              sights and sounds of the city.Exploring Austin's Quirky
              Attractions. Austin, Texas is an amazing place to visit! With its
              beautiful scenery and diverse culture, Austin is an exciting
              destination for all. Whether you're looking for a fun adventure or
              just a relaxing weekend to take in the sights and sounds of the
              city.Exploring Austin's Quirky Attractions. Austin, Texas is an
              amazing place to visit! With its beautiful scenery and diverse
              culture, Austin is an exciting destination for all. Whether you're
              looking for a fun adventure or just a relaxing weekend to take in
              the sights and sounds of the city.Exploring Austin's Quirky
              Attractions. Austin, Texas is an amazing place to visit! With its
              beautiful scenery and diverse culture, Austin is an exciting
              destination for all. Whether you're looking for a fun adventure or
              just a relaxing weekend to take in the sights and sounds of the
              city.Exploring Austin's Quirky Attractions. Austin, Texas is an
              amazing place to visit! With its beautiful scenery and diverse
              culture, Austin is an exciting destination for all. Whether you're
              looking for a fun adventure or just a relaxing weekend to take in
              the sights and sounds of the city
            </p>
          </div>
          <Related />
        </div>
      </section>
    </Layout>
  );
}

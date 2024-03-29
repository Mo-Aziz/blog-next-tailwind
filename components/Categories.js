import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";

export default function Categories() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      {/* grid of two cols categories */}
      <div className="grid md:grid-cols-2">
        {/* column 1 */}
        <div className="item">
          <h1 className="font-bold text-4xl py-12 ">Business</h1>
          <div className="flex flex-col gap-6">
            {/* posts */}
            {post()}
            {post()}
            {post()}
            {post()}
          </div>
        </div>
        {/* column 2 */}
        <div className="item">
          <h1 className="font-bold text-4xl py-12 ">Pleasure</h1>
          <div className="flex flex-col gap-6">
            {/* posts */}
            {post()}
            {post()}
            {post()}
            {post()}
            {post()}
          </div>
        </div>
      </div>
    </section>
  );
}

function post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <Image
            src={"/images/img1.jpg"}
            width={300}
            height={250}
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex flex-col justify-center">
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
            <h2 className="text-xl   font-bold text-gray-800 hover:text-gray-600 text-truncate">
              {" "}
              Experience the southern generousity
            </h2>
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}

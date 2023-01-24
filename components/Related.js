import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";

export default function Related() {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>
      <div className="flex- flex-col gap-10">
        {post()}
        {post()}
        {post()}
        {post()}
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
            height={200}
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

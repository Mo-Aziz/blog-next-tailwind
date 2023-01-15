import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      {/* grid of two cols categories */}
      <div className="grid md:grid-cols-2">
        {/* column 1 */}
        <div className="item">
          <h1 className="font-bold text-4xl py-12 ">Business</h1>
          <div className="flex flex-col gap-6">{/* posts */}</div>
        </div>
        {/* column 2 */}
        <div className="item">
          <h1 className="font-bold text-4xl py-12 ">Pleasure</h1>
          <div className="flex flex-col gap-6">{/* posts */}</div>
        </div>
      </div>
    </section>
  );
}

function post() {
  return (
    <div className="flex gap-6">
      <div className="image flex flex-col justify-start"></div>
    </div>
  );
}

import { ImFacebook, ImTwitter, ImYoutube, ImInstagram } from "react-icons/im";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-cenetr sm:flex-row sm:justify-between  text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="input-text"
          />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href="/">
            <p className="font-bold uppercase text-3xl">Bloggy</p>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6 ">
            <Link href="/">
              <ImFacebook color="#3b5998" />
            </Link>

            <Link href="/">
              <ImTwitter color=" #1DA1F2" />
            </Link>

            <Link href="/">
              <ImYoutube color="#c4302b" />
            </Link>

            <Link href="/">
              <ImInstagram color="black" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

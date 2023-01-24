import Link from "next/link";
import { ImFacebook, ImInstagram, ImTwitter, ImYoutube } from "react-icons/im";
import Newsletter from "./_child/Newsletter";

const Footer = () => {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          {/* social media icons */}
          <div className="flex gap-6 justify-center">
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
          {/* copy rights sections */}
          <p className="text-gray-400 py-5">
            Copyrights Ⓒ All rights reserved for Innovatx technologies
          </p>
          <p className="text-gray-400 text-center">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

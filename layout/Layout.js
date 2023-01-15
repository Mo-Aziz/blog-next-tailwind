import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
function Layout({ children }) {
  return (
    <>
      <Head>
        <title>BLOGGY | a blog has all what you need</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

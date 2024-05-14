import Head from "next/head";
import Footer from "./components/footer";
import Header from "./components/header";
import Banner from "./components/bannner";
import Contact from "./components/contact";

const Service = () => {
  return (
    <div>
      <Head>
        <title>Services</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Banner page="services" />
      <Contact />
      <Footer />
      <a href="https://wa.me/+919911083130?text=Hi" className="float_icon">
        <img src="/whatsapp.png" />
      </a>
    </div>
  );
};
export default Service;
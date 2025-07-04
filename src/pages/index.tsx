import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "@/components/about";
import Featured from "@/components/featured";
import Navbar from "@/components/navbar";
import Experience from "@/components/experience";
import Projects from "@/components/projecs";
import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";
import Sliderr from "@/components/slider/slider";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Snr Developer - 3+ YOE</title>
        <meta name="description" content="Software Developer - Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Featured />
        <About />
        <Sliderr />
        <Experience />
        <Projects />
        {/* <Testimonial /> */}
        <Footer />
      </main>
    </>
  );
}

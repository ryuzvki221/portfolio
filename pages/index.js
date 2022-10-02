import Head from "next/head";
import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Service from "../components/services/Service";
import Technology from "../components/technologies/Technology";
import Education from "../components/timeline/Education";
import Experience from "../components/timeline/Experience";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <About />
      <Service />
      <Technology />
      <Experience />
      <Education />
    </>
  );
}

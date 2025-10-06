import Image from "next/image";
import Navbar from "./(components)/navbar";
import About from "./(components)/about";
import Contact from "./(components)/contact";
import Hero from "./(components)/hero";
import Speakers from "./(components)/speakers";
import Why from "./(components)/why";
import Highlights from "./(components)/highlights";
import Schedule from "./(components)/schedule";
import Registration from "./(components)/registration";
import Participants from "./(components)/participants";

export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Why />
      <Speakers />
      <Participants />
      <Highlights />
      <Schedule />
      <Registration />
      <Contact />
    </div>
  );
}

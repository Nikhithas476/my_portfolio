import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Pipeline from "@/components/Pipeline";
import Metrics from "@/components/Metrics";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certs from "@/components/Certs";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Pipeline />
      <Metrics />
      <Skills />
      <Experience />
      <Education />
      <Certs />
    </main>
  );
}

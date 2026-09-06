import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { getPortfolioData } from "@/lib/api";

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About info={data.about} />
        <Experience entries={data.experience} />
        <Projects projects={data.personalProjects} />
        <Skills categories={data.skills} />
        <Achievements items={data.achievements} stats={data.competitiveStats} />
        <Education entries={data.education} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

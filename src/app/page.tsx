import About from "@/components/About-us";
import BlogSection from "@/components/Blog";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div>
      <Hero/>
      <BlogSection/>
      <About/>
      <Contact/>
    </div>
  );
}

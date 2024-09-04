import Nav from "@/components/common/Nav";
import Companies from "@/components/section/Companies";
import Countries from "@/components/section/Countries";
import Employers from "@/components/section/Employers";
import Hero from "@/components/section/Hero";
import Popular from "@/components/section/Popular";

export default function Home() {
  return (
    <main className="bg-black">
      <Nav />
      <Hero />
      <Countries />
      <Employers />
      <Companies />
      <Popular />
      
    </main>
  );
}

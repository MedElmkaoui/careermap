import Nav from "@/components/common/Nav";
import Countries from "@/components/section/Countries";
import Hero from "@/components/section/Hero";

export default function Home() {
  return (
    <main className="bg-black">
      <Nav />
      <Hero />
      <Countries />
    </main>
  );
}

import { HomeHero } from "../components/sections/HomeHero";

export default function Home() {
  return (
    <div className="min-h-screen   ">
      <main className=" overflow-x-hidden  min-h-screen  flex flex-col justify-center  gap-8  items-center  overflow-y-auto  ">
        <HomeHero />
      </main>
      <footer className="flex items-center justify-center"></footer>
    </div>
  );
}

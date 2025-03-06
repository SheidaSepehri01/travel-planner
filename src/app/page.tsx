import { HomeHero } from "../components/sections/HomeHero";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20  sm:p-20 ">
      <main className=" min-h-screen  flex flex-col justify-center  gap-8  items-center mr-3 overflow-y-auto overflow-x-hidden ">
        <HomeHero />
      </main>
      <footer className="flex items-center justify-center"></footer>
    </div>
  );
}

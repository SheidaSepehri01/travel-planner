import { PreviousPlans } from "../../components/sections/PreviousPlans";

export default function plans() {
  return (
    <div className="min-h-screen   ">
      <main className=" overflow-x-hidden  min-h-screen  flex flex-col justify-center  gap-8  items-center  overflow-y-auto  ">
        <PreviousPlans />
      </main>
      <footer className="flex items-center justify-center"></footer>
    </div>
  );
}

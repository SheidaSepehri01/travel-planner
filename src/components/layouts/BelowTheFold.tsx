import { Ref } from "react";
import { ToyFanMargin } from "./ToyFanMargin";

export const BelowTheFold = (props: { sectionRef: Ref<HTMLDivElement> }) => {
  const { sectionRef } = props;
  return (
    <>
      <div className="relative h-screen w-full " ref={sectionRef}>
        <div className="bg-amber-200 w-full h-screen flex justify-start items-start  text-black bg-[url('/assets/images/texture.webp')] bg-cover bg-center bg-no-repeat">
          <ToyFanMargin />
          <div
            className="h-fit w-[40%] relative top-1/3 -translate-y-1/3 left-1/3 flex flex-col justify-baseline items-start"
            dir="ltr"
          >
            <h1 className="text-3xl font-bold text-left flex justify-start items-start">
              Plan Your Next Trip with us.
            </h1>
            <p className="text-xl">
              We are a team of passionate travel enthusiasts dedicated to
              helping you plan your next adventure with ease and excitement.
              With our intuitive platform, you can seamlessly track your
              expenses, manage your budget, and organize every detail of your
              trip—all in one place. Our user-friendly interface, enhanced with
              stunning visuals and smooth animations, makes travel planning an
              enjoyable experience. Whether youre embarking on a solo journey, a
              family vacation, or a group adventure, we provide the tools to
              make your trip stress-free and unforgettable. Let us take the
              hassle out of planning so you can focus on making memories!
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-screen w-full " ref={sectionRef}>
        <div className="bg-amber-200 w-full h-screen flex justify-start items-start  text-black bg-[url('/assets/images/texture.webp')] bg-cover bg-center bg-no-repeat">
          <div
            className="h-fit w-[40%] relative top-1/3 -translate-y-1/3 left-1/3 flex flex-col justify-baseline items-start"
            dir="ltr"
          >
            <h1 className="text-3xl font-bold text-left flex justify-start items-start">
              track your expenses
            </h1>
            <p className="text-xl">
              With our intuitive platform, you can seamlessly track your
              expenses, manage your budget, and organize every detail of your
              trip—all in one place. Our user-friendly interface, enhanced with
              stunning visuals and smooth animations, makes travel planning an
              enjoyable experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

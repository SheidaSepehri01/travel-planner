import Image from "next/image";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ReactNode } from "react";
import { useRef } from "react";

const topLeft = [
  1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1,
  0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1,
  0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1,
];
const topRight = [
  0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0,
  0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1,
  0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
];
const bottomRight = [
  0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
  0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1,
];
const bottomLeft = [
  0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
  0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1,
  0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1,
];
export const ToyFanMargin = () => {
  const fanContainerRef = useRef<null | HTMLDivElement>(null);
  const [topRightElements, setTopRightElements] = useState<ReactNode[]>([]);
  const [topLeftElements, setTopLeftElements] = useState<ReactNode[]>([]);
  const [bottomRightElements, setBottomRightElements] = useState<ReactNode[]>(
    []
  );
  const [bottomLeftElements, setBottomLeftElements] = useState<ReactNode[]>([]);
  const handleGenerateGridElements = (array: number[]) => {
    const elements: ReactNode[] = array.map((item, i) => {
      if (item) {
        return (
          <Image
            key={i}
            src="/assets/icons/toys_fan.svg"
            alt="toyfan"
            width={35}
            height={35}
            className={`fans fan-${i}`}
            data-index={i}
          />
        );
      } else {
        return (
          <div
            key={i}
            className="w-[35px] h-[35px] bg-transparent"
            data-index={i}
          ></div>
        );
      }
    });
    return elements;
  };
  useEffect(() => {
    setTopRightElements(handleGenerateGridElements(topRight));
    setTopLeftElements(handleGenerateGridElements(topLeft));
    setBottomRightElements(handleGenerateGridElements(bottomRight));
    setBottomLeftElements(handleGenerateGridElements(bottomLeft));
  }, []);
  useEffect(() => {
    if (fanContainerRef.current) {
      const fans = document.querySelectorAll(".fans");

      fans.forEach((fan) => {
        fan.addEventListener("mouseenter", () => {
          gsap.to(fan, {
            rotate: "+=360",
            duration: 1,
            ease: "power2.out",
          });
        });

        fan.addEventListener("mouseleave", () => {
          gsap.to(fan, {
            rotate: "0",
            duration: 1,
            ease: "power2.out",
          });
        });
      });
    }
  }, [
    topRightElements,
    topLeftElements,
    bottomRightElements,
    bottomLeftElements,
  ]);

  return (
    <div className=" absolute w-full h-full left-0 top-0">
      <div
        className="absolute right-0 top-2 grid grid-cols-8 gap-1 grid-rows-8 w-fit h-fit  "
        ref={fanContainerRef}
      >
        {topRightElements}
      </div>
      <div
        className="absolute left-0 top-2 grid grid-cols-8 gap-1 grid-rows-8 w-fit h-fit  "
        ref={fanContainerRef}
      >
        {topLeftElements}
      </div>
      <div
        className="absolute right-0 bottom-2 grid grid-cols-8 gap-1 grid-rows-8 w-fit h-fit  "
        ref={fanContainerRef}
      >
        {bottomRightElements}
      </div>
      <div
        className="absolute left-0 bottom-2 grid grid-cols-8 gap-1 grid-rows-8 w-fit h-fit  "
        ref={fanContainerRef}
      >
        {bottomLeftElements}
      </div>
    </div>
  );
};

"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  return (
    <div
      className="sticky  top-0 left-0 w-full h-11 flex justify-center bg-amber-100/25
     backdrop-blur-sm items-center z-50"
    >
      <div className="flex w-full px-3 h-full justify-between items-center text-black">
        <button className="text-2xl font-bold" onClick={() => router.push("/")}>
          traveling journal
        </button>
        <div className="flex gap-2">
          <button
            className="text-2xl font-bold"
            onClick={() => router.push("/addAPlan")}
          >
            <Image
              src={"/assets/icons/add_circle.svg"}
              alt="add"
              width={30}
              height={30}
              className="fill-black outline-black text-black"
            />
          </button>
          <button className="text-2xl font-bold">
            {" "}
            <Image
              src={"/assets/icons/book.svg"}
              alt="add"
              width={30}
              height={30}
              className="fill-black outline-black text-black"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

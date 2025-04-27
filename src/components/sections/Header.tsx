"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Playwrite_RO } from "next/font/google";
import { useAuthStore } from "../../stores/auth";
const playwrite = Playwrite_RO({
  variable: "--font-playwrite",
});
export const Header = () => {
  const router = useRouter();
  const { user } = useAuthStore();
  return (
    <div
      className="absolute top-0 w-full h-11 flex justify-center
      items-center z-50"
    >
      <div className="flex w-full h-full  p-1 backdrop-blur-sm  bg-slate-200/50 px-5  justify-between items-center text-black">
        <button className="text-2xl font-bold" onClick={() => router.push("/")}>
          <Image
            src={"/assets/icons/home.svg"}
            alt="home"
            width={30}
            height={30}
          />
        </button>
        <p className={`text-xl font-semibold font ${playwrite.className}`}>
          traveling journal
        </p>
        <div className="flex gap-2">
          <button
            className="text-2xl font-bold"
            onClick={() =>
              user ? router.push("/addAPlan") : router.push("/signUp")
            }
          >
            <Image
              src={"/assets/icons/add_circle.svg"}
              alt="add"
              width={30}
              height={30}
              className="fill-black outline-black text-black"
            />
          </button>
          <button
            className="text-2xl font-bold"
            onClick={() =>
              user ? router.push("/plans") : router.push("/signUp")
            }
          >
            {" "}
            <Image
              src={"/assets/icons/book.svg"}
              alt="previous plans"
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

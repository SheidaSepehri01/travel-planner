import Image from "next/image";

export const Header = () => {
  return (
    <div
      className="sticky  top-0 left-0 w-full h-11 flex justify-center bg-amber-100/25
     backdrop-blur-sm items-center z-50"
    >
      <div className="flex w-2/3 h-full justify-between items-center text-black">
        <button className="text-2xl font-bold">
          <Image
            src={"/assets/icons/add_circle.svg"}
            alt="add"
            width={30}
            height={30}
            className="fill-black outline-black text-black"
          />
        </button>
        <button className="text-2xl font-bold">traveling journal</button>
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
  );
};

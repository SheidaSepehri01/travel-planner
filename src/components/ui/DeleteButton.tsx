import React from "react";
import Image from "next/image";
type propType = {
  onClick: () => void;
};
export const DeleteButton = (props: propType) => {
  return (
    <button
      onClick={props.onClick}
      className="flex justify-center items-center h-full w-fit"
    >
      <Image
        src={"/assets/icons/delete.svg"}
        alt="remove "
        className="flex justify-center items-center h-full w-fit"
      />
    </button>
  );
};

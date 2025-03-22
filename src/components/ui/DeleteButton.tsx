import React from "react";
import Image from "next/image";
import trash from "../../assets/icons/delete.svg";
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
        src={trash}
        alt="remove "
        className="flex justify-center items-center h-full w-fit"
      />
    </button>
  );
};

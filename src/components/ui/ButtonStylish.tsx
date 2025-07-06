import React, { ReactNode } from "react";

export const ButtonStylish = (props: {
  action: () => void;
  children: ReactNode;
}) => {
  const { children, action } = props;
  return (
    <button
      className="duration-200 bg-amber-300 border-4 !border-brown-500 !rounded-xl hover:bg-green-200 hover:!text-amber-300 flex justify-center items-center h-12 min-w-32 w-max p-3 text-xl font-bold tracking-wide !text-brown-500"
      onClick={action}
    >
      {children}
    </button>
  );
};

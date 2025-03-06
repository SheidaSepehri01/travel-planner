"use client";
import React, { ReactNode } from "react";
type propTypes = {
  content: string | ReactNode;
  onClickAction: () => void;
};
export const ButtonBasic = (props: propTypes) => {
  const { content, onClickAction } = props;
  return (
    <button
      onClick={onClickAction}
      className="text-black w-fit cursor-pointer flex justify-center items-center"
    >
      {content}
    </button>
  );
};

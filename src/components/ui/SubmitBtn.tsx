import React from "react";
import { Button } from "@/components/ui/button";

export const SubmitBtn = (props: {
  onSubmit: () => void;
  title: string;
  disabled: boolean;
}) => {
  const { onSubmit, title, disabled } = props;
  return (
    <Button
      className="w-full bg-amber-900/80 hover:bg-amber-900 text-white font-bold"
      onClick={() => onSubmit()}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};

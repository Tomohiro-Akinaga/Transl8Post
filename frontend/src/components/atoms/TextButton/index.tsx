import React, { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> {}

export const TextButton = ({ children, onClick }: Props) => {
  return <button onClick={onClick}>{children}</button>;
};

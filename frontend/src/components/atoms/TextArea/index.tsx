import React from "react";

interface Props {
  label: string;
  text: string;
}

export const TextArea = ({}: Props) => {
  return <textarea />;
};

export default TextArea;

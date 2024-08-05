import React from "react";

interface Props {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({ label, onChange }: Props) => {
  return (
    <label>
      {label}
      <textarea onChange={onChange} />
    </label>
  );
};

export default TextArea;

import { PropsWithChildren, useState } from "react";

const colors = ["red", "green", "blue", "yellow"];

const randint = (min: number, max?: number) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min));
};

const pick = <T,>(arr: T[]) => {
  return arr[randint(arr.length)];
};

export const CrazyButton = ({ children }: PropsWithChildren) => {
  const [currColor, setCurrColor] = useState<string>(pick(colors));

  const handleColorChange = () => {
    setCurrColor(pick(colors));
  };

  return (
    <button style={{ background: currColor }} onClick={handleColorChange}>
      {children}
    </button>
  );
};

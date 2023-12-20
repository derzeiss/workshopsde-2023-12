import { PropsWithChildren, useState } from 'react';
import { randint } from 'workshops-de_shared';

const colors = ['red', 'green', 'blue', 'yellow'];

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

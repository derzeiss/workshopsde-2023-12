import { ReactNode, useState } from "react";

interface HideableProps {
  children?: ReactNode;
}

// higher order component = HOC
export const Hideable = ({ children }: HideableProps) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="hideable">
      {!hidden && <p>{children}</p>}
      <button className="tertiary m-top" onClick={() => setHidden(!hidden)}>
        {hidden ? "+ show" : "- hide"} details
      </button>
    </div>
  );
};

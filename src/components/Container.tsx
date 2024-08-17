import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div
      className={`h-full w-full max-w-[1290px] px-[10px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

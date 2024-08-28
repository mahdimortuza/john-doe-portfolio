import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div
      className={`h-full w-full max-w-[1304px] px-[24px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

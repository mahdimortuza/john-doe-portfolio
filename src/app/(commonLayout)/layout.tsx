import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        {/* <Navbar />  */}
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default CommonLayout;

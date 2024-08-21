import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>
        <Navbar /> {children} 
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default CommonLayout;

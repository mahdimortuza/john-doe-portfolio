import assets from "@/assets";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { dmSans } from "@/components/ui/fonts";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container className=" flex flex-col justify-center items-center h-screen">
      <Image src={assets.errorImage.image} alt="error-image" />
      <Link href="/">
        <Button
          className={`${dmSans.className} font-dmSans mt-[25px] rounded-full px-[20px] py-[10px] bg-themeBlue text-[18px] font-normal`}
        >
          Bring me to home
        </Button>
      </Link>
    </Container>
  );
};

export default NotFound;

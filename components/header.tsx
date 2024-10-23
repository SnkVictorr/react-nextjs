import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <>
      {/*emmet abreviation: .flex.justify-between.px-5.pt-6  */}
      <div className="flex justify-between px-5 pt-6">
        <Image src="/logo.png" alt="iFood" width={70} height={20} />
        <Button
          size="icon"
          variant="outline"
          className="border-none bg-transparent"
        >
          <MenuIcon />
        </Button>
      </div>
    </>
  );
};

export default Header;

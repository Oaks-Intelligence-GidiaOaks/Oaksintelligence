import Image from "next/image";
import Link from "next/link";
import { RiArrowGoBackLine } from "react-icons/ri";
import oaksLogo from "../../assets/oaks-logo.svg";

function StudioNavbar(props) {
  return (
    <>
      <div className="h-fit flex items-center justify-between mx-5 my-3">
        <Link href={"/"} className="flex gap-2 items-center">
          <RiArrowGoBackLine size={30} color="#6FBF21" />
          <p className="text-[#6FBF21]">Go To Website</p>
        </Link>
        <div className="h-fit">
          <Image alt="logo" src={oaksLogo} className="max-w-xs object-cover" />
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </>
  );
}

export default StudioNavbar;

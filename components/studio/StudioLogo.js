import Image from "next/image";
import oaksLogo from "../../assets/oaks-thumbnail.svg";

function StudioLogo(props) {
  return (
    <div className="flex items-center gap-2 ">
      <Image
        alt="logo"
        src={oaksLogo}
        width={30}
        height={30}
        className="object-cover rounded-full translate-x-3"
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioLogo;

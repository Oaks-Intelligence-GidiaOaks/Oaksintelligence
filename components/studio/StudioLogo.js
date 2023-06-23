import Image from "next/image";
import oaksLogo from "../../assets/oaks-logo.svg";

function StudioLogo(props) {
  return (
    <div className="flex gap-2">
      <Image
        alt="logo"
        src={oaksLogo}
        width={50}
        height={50}
        className="object-cover rounded-full"
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioLogo;

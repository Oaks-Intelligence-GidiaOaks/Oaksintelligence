import comingSoon from "@/assets/coming-soon.svg";
import Image from "next/image";

const ComingSoon = () => {
  return (
    <div className="w-full">
      <div className="flex mx-auto justify-between max-w-[1560px] py-5 px-[5%] sm:px-[10%] items-center">
        <div className="w-full min-h-[20vh] p-3 rounded-md">
          <h1 className="poppins-7 dark:text-white text-center text-main-light text-3xl transition-all duration-300 ease-in-out">
            Coming Soon!!!
          </h1>
          <Image
            alt="Coming soon"
            className="my-10 w-[clamp(200px,80%,500px)] block mx-auto"
            src={comingSoon}
          />
          <p className="poppins-4 dark:text-white text-center text-main-light text-base transition-all duration-300 ease-in-out mt-3">
            Something awesome is on the way. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

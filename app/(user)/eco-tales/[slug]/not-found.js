import Link from "next/link";
import notfound from "@/assets/not-found.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex pt-10 flex-col items-center justify-center bg-white dark:bg-main transition-all duration-500 ease-in-out">
      <div className="mx-auto pt-10 flex flex-col w-[clamp(240px,40%,400px)] items-center justify-center">
        <Image
          alt="no-results"
          src={notfound}
          className="w-full"
          width={"40%"}
        />
        <h2 className="text-4xl pt-10 pb-3 font-bold poppins-7 text-main-light dark:gradient-text transition-all duration-300 ease-in-out">
          Not Found
        </h2>
        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4 transition-all duration-300 ease-in-out">
          Could not find requested resource
        </p>
        <p className="mb-20 text-main-light dark:text-main poppins-4 leading-[34px] mt-4 transition-all duration-300 ease-in-out">
          View{" "}
          <Link
            href="/blog"
            className="gradient-text hover:-hue-rotate-60 transition-all duration-300 ease-in-out"
          >
            all posts
          </Link>
        </p>
      </div>
    </div>
  );
}

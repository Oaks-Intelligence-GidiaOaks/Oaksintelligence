import Link from "next/link";
import notfound from "@/assets/not-found.png";

export default function NotFound() {
  return (
    <div className="mx-auto flex flex-col w-[clamp(240px,40%,600px)] items-center justify-center gap-10">
      <Image alt="no-results" src={notfound} className="w-full" width={"40%"} />
      <h2 className="text-4xl py-10 font-bold poppins-7 text-main-light dark:gradient-text transition-all duration-300 ease-in-out">
        Not Found
      </h2>
      <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4 transition-all duration-300 ease-in-out">
        Could not find requested resource
      </p>
      <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4 transition-all duration-300 ease-in-out">
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  );
}

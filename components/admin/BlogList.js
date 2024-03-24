import urlFor from "@/sanity/lib/urlFor";
import Image from "next/image";
import { BsArrowUpRight } from "@react-icons/all-files/bs/BsArrowUpRight";
import ClientSideRoute from "./ClientSideRoute";

const BlogList = ({ posts }) => {
  return (
    <div className="mx-auto max-w-[1560px] py-3 sm:py-5 pl-[5%] sm:pl-[10%] pr-[5%] sm:pr-[10%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-16 pb-24">
        {/* Posts */}
        {posts.map((post) => {
          return (
            <ClientSideRoute
              route={`/blog/post/${post.slug.current}`}
              key={post._id}
            >
              <div className="flex flex-col group cursor-pointer rounded-lg overflow-hidden shadow-lg dark:glassmorphism-sec-link dark:shadow-none dark:rounded-3xl ">
                <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                  <Image
                    className="object-cover object-left lg:object-center"
                    alt={post?.author?.name}
                    src={urlFor(post.mainImage).url()}
                    fill
                    sizes="480px"
                    priority
                  />
                  <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                    <div>
                      <p className="font-bold poppins-6">{post.title}</p>
                      <p className="poppins-4">
                        {new Date(post._createdAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                      {post?.categories?.map((category, i) => (
                        <div
                          key={i}
                          className="bg-[#f7ab0a] text-center text-black px-3 pv-1 rounded-full text-sm font-semibold"
                        >
                          <p className="jost">{category.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex-1 px-5">
                  <p className="underline poppins-6 text-lg font-bold text-main-light dark:text-main line-clamp-1">
                    {post?.title}
                  </p>
                  <p className="line-clamp-2 poppins-4 text-gray-500">
                    {post?.description}
                  </p>
                </div>
                <p className="my-5 px-5 font-bold poppins-6 flex items-center group-hover:underline text-main-light dark:text-main">
                  Read Post
                  <BsArrowUpRight className="ml-2 h-4 w-4" />
                </p>
              </div>
            </ClientSideRoute>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;

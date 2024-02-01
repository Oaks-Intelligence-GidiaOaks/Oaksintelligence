import { ComicsListLoadingSkeleton } from "@/components/ComicsListLoadingSkeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="min-h-screen bg-white dark:bg-main transition-all duration-300 ease-in-out overflow-hidden">
      <div className="mx-auto max-w-[1560px] py-3 sm:py-5 pl-[5%] sm:pl-[10%] pr-[5%] sm:pr-[10%]">
        <ComicsListLoadingSkeleton />
      </div>
    </main>
  );
}

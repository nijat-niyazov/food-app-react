export const MealSkeleton = ({ index }: { index: number }) => {
  return (
    <li
      style={{
        animationDelay: index * 5 + "s",
      }}
      className="rounded-xl bg-white border-1 border-black/10 px-4 py-8  offer-shadow"
    >
      <div className="grid grid-cols-[1fr_auto] gap-3 mb-5 items-start justify-between px-4">
        <span className="text-xl font-semibold text-text bg-gray-200 rounded-full animate-pulse h-8"></span>

        <div className="w-28 h-28 bg-gray-200 rounded-full animate-pulse row-span-2"></div>

        <p className="bg-gray-200 rounded-full animate-pulse h-14"></p>
      </div>
    </li>
  );
};

import Image from "next/image";

export default function RecentlyAdded({ data = [] }) {
  return (
    <div className="pb-10">
      <div className="pb-10">
  <div className="flex md:grid grid-cols-2 md:grid-cols-4 gap-6 overflow-x-auto no-scrollbar px-1">
    {data.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-lg shadow overflow-hidden flex-shrink-0 min-w-[48%] md:min-w-0"
      >
        <div className="relative w-full h-[350px] group">
          {/* Image */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded-lg transition-transform duration-300 group-hover:opacity-70"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10 rounded-lg"></div>

          {/* Text */}
          <div className="absolute inset-0 z-20 text-center px-4">
            <p className="text-white text-xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-2">
              {item.title}
            </p>
            <p className="text-white text-sm mt-[200px] opacity-80">
              This assignment is designed to evaluate your frontend development
              skills, particularly using Next.js, state management.
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

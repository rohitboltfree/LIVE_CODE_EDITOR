export function GridBackgroundDemo({ children }) {
  return (
    <div className=" w-full bg-[#070F2B] dark:bg-white  bg-dot-white/[0.2] dark:bg-dot-black/[0.2] relative flex items-center justify-center">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="bg-stone-900     font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      {children}
    </div>
  </div>
  );
}

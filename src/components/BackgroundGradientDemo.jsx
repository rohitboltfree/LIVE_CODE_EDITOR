import { Link } from "react-router-dom";
import { BackgroundGradient } from "./background-gradient";

export function BackgroundGradientDemo({ img, title, description }) {
  return (
    <div className="">
      <BackgroundGradient className="h-full rounded-[22px] max-w-sm  bg-white dark:bg-zinc-900">
        <div className="flex flex-col justify-between h-full">
          <img
            src={img || `https://source.unsplash.com/400x400/?jordans`}
            alt="jordans"
            //   height="400"
            //   width="400"
            className="object-cover flex-1 rounded-xl"
          />
          <div className="p-4 sm:p-10">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {title || "Demo Title"}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {description || "Demo Description"}
            </p>
            <div className="flex justify-between mt-5">
              <Link to={"/notes"}>
                <button className="rounded-full w-24  px-4 p-2 text-white flex items-center justify-center space-x-1 bg-[#070F2B] mt-4 text-xs font-bold ">
                  <span>Notes</span>
                </button>
              </Link>
              <Link to={"/test-skill"}>
                <button className="rounded-full px-4 w-24 p-2 text-white flex items-center justify-center space-x-1 bg-[#070F2B] mt-4 text-xs font-bold ">
                  <span>Test Skills</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}

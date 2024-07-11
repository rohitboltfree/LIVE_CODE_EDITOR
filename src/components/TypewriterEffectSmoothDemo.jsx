import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Features",
    },
    {
      text: "of",
    },
    {
      text: "this",
    },
    {
      text: "site",
    },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

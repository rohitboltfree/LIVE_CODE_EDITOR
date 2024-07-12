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
      <TypewriterEffectSmooth words={words} />
  );
}

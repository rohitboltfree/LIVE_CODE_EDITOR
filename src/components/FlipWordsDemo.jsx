import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["HTML", "CSS", "JAVASCRIPT", "modern"];

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal ">
        Master
        <FlipWords words={words} /> <br />
        in Our Interactive Playground
        
      </div>
      <div className="">
      <p className="text-base pt-4">The Best Place to Practice and Perfect Your Web Development Skills</p>
      </div>
      {/* <span className="flex  mt-16 flex-row justify-between items-center w-full text-gradient">
        Sometimes,
      </span>
      <span className=" font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
        you just need to see it.
      </span> */}
    </div>
  );
}

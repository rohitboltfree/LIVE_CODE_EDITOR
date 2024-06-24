import React from 'react'
import { Boxes } from './ui/background-boxes';
import { cn } from '../utils/cn';
import logo from './logo.png';
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from './ui/text-reveal-card'

function Home() {
  return (
    <>
    <BackgroundBoxesDemo/>

    {/* <TextRevealCardPreview/> */}

    </>
  )
}


 
export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}

export function BackgroundBoxesDemo() {
  return (
    <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
      <img className='h-14 w-full items-start' src={logo} alt="Logo" />
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
      JS LAB is a coding website focused on HTML, CSS, and JavaScript.
       {/* The site likely provides resources, tutorials, and possibly interactive coding exercises to help users learn and improve their skills in web development. It seems tailored for individuals looking to enhance their proficiency in these foundational web technologies. For a detailed understanding, visiting the site directly would provide the most accurate and specific information. */}
      </p>
    </div>
  );
}

export default Home

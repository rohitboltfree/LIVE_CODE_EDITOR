// import React from 'react'
import js_circle from "./js_circle.png";

import { CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { BackgroundGradientDemo } from "./BackgroundGradientDemo";
import { FlipWordsDemo } from "./FlipWordsDemo";
import { GlobeDemo } from "./GlobeDemo";
import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmoothDemo";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { GridBackgroundDemo } from "./GridBackgroundDemo";

const featuresWords = [
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

const aboutWords = [
  {
    text: "About",
  },
  {
    text: "this",
  },
  {
    text: "site",
  },
];

function Home() {
  return (
    <GridBackgroundDemo>
      <main className=" text-white max-w-7xl mx-auto">
        <section className="xl:p-0 pt-20 px-10 mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center lg:pr-10">
            <FlipWordsDemo />
            {/* <br className="sm:block hidden" />
            <img
              className=" top-10  object-cover text-center max-w-40 max-h-40"
              src={logo}
              alt="Logo"
            />
            <br />

            <span className="text-2xl font-thin">
              JS LAB is a coding website focused on <br /> HTML, CSS, &
              JavaScript.
            </span>

            <p className="text-lg font-thin">
              You can learn many thing about HTML,CSS & JAVASCRIPT
            </p> */}
          </div>
          <div className="mt-10 lg:mt-0">
            {/* <img className='h-100vh top-6' src={side2} alt="Logo" /> */}
            {/* <Lottie
              className="flex-1 mt-8 realtive overflow-hidden"
              animationData={animationData}
            /> */}
            <GlobeDemo />
          </div>
        </section>

        <section className="text-center mb-32">
          <TypewriterEffectSmooth words={featuresWords} />
          <p className="font-normal text-white text-center text-sm pb-20">
            JS lab is skilled and passionate about HTML,CSS, & JAVASCRIPT and
            have many thing that you can learn about these three
          </p>
          <div className="flex flex-wrap gap-10 justify-center ">
            <BackgroundGradientDemo
              img={
                "https://png.pngtree.com/thumb_back/fw800/background/20221015/pngtree-abstract-programming-workflow-a-realtime-html-code-development-screen-photo-image_28457152.jpg"
              }
              title={"HTML"}
              description={"In this we cover all about html"}
            />
            <BackgroundGradientDemo
              img={"https://i.morioh.com/2023/10/13/73dac01b.webp"}
              title={"CSS"}
              description={"In this we cover all about css"}
            />
            {/* <MediaCard3 /> */}
            <BackgroundGradientDemo
              img={
                "https://img.freepik.com/premium-photo/software-developer-programming-code-abstract-computer-script-code-selective-focus_372999-1037.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais"
              }
              title={"JAVASCRIPT"}
              description={"In this we cover all about javascript"}
            />
          </div>
        </section>
        <section className="">
          <TypewriterEffectSmooth words={aboutWords} />
          <p className="font-normal text-center text-white text-sm pb-20">
            JS lab is skilled and passionate about HTML,CSS, & JAVASCRIPT and
            have many thing that you can learn about these three
          </p>
          <div className="flex flex-col text-white items-center">
            <div className="m-6  w-3/4 text-left ">
              <div className="flex m-1 px-6 py-8 rounded-lg  bg-zinc-800">
                <img
                  className="rounded-3xl object-cover h-12 w-12 mr-8"
                  src="https://e7.pngegg.com/pngimages/5/917/png-clipart-web-development-computer-icons-computer-programming-programmer-html-firm-miscellaneous-angle-thumbnail.png"
                  alt="html"
                />
                <div className=" ">
                  <h2 className="font-bold text-2xl ">HTML </h2>
                  <p className="text-sm ">
                    HTML stands for Hyper Text Markup Language. HTML is the
                    standard markup language for creating Web pages. HTML
                    describes the structure of a Web page.
                  </p>
                </div>
              </div>
            </div>
            <div className="m-6  w-3/4 text-left ">
              <div className="  flex m-1 px-6 py-8 rounded-lg  bg-zinc-800">
                <img
                  className="rounded-3xl object-cover h-12 w-12 mr-8 bg-zinc-800"
                  src="https://w7.pngwing.com/pngs/230/514/png-transparent-front-end-web-development-html-css-design-and-build-web-sites-cascading-style-sheets-stage-web-design-text-logo-thumbnail.png"
                  alt="css"
                />
                <div className=" ">
                  <h2 className="font-bold text-2xl ">css</h2>
                  <p className="text-sm ">
                    CSS (Cascading Style Sheets) is used to style and layout web
                    pages — for example, to alter the font, color, size, and
                    spacing of your content, split it into multiple columns, or
                    add animations and other decorative features.
                  </p>
                </div>
              </div>
            </div>
            <div className="m-6  w-3/4 text-left ">
              <div className="  flex m-1 px-6 py-8 rounded-lg  bg-zinc-800">
                <img
                  className="rounded-3xl object-cover h-16 w-16 mr-8"
                  src={js_circle}
                  alt="js"
                />
                <div className=" ">
                  <h2 className="font-bold text-2xl ">javascript</h2>
                  <p className="text-sm ">
                    JavaScript is a scripting language that enables you to
                    create dynamically updating content, control multimedia,
                    animate images, and pretty much everything else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="w-100vw h-16 flex items-center justify-center font-extralight text-sm">
          Good! "you have completly visited Js Labs"
        </footer>
      </main>
    </GridBackgroundDemo>
  );
}

export function MediaCard1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://png.pngtree.com/thumb_back/fw800/background/20221015/pngtree-abstract-programming-workflow-a-realtime-html-code-development-screen-photo-image_28457152.jpg"
        title="HTML"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          HTML
        </Typography>
        <Typography variant="body2" color="text.secondary">
          In this we cover all about html
        </Typography>
      </CardContent>
      <CardActions className="text-orange-500 justify-between ">
        <Link
          to="/notes"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500" : "text-orange-500-700"
            } text-gray-300 hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
          }
        >
          Notes
        </Link>
        <Link
          to="/test-skill"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500" : "text-grey-700"
            } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
          }
        >
          Test Skills
        </Link>
      </CardActions>
    </Card>
  );
}
export function MediaCard2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.morioh.com/2023/10/13/73dac01b.webp"
        title="CSS"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          CSS
        </Typography>
        <Typography variant="body2" color="text.secondary">
          In this we cover all about css
        </Typography>
      </CardContent>
      <CardActions className="text-orange-500 justify-between ">
        <Link
          to="/notes"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500" : "text-orange-500-700"
            } text-gray-300 hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
          }
        >
          Notes
        </Link>
        <Link
          to="/test-skill"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500" : "text-grey-700"
            } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
          }
        >
          Test Skills
        </Link>
      </CardActions>
    </Card>
  );
}
export function MediaCard3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/premium-photo/software-developer-programming-code-abstract-computer-script-code-selective-focus_372999-1037.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais"
        title="JAVASCRIPT"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          JAVASCRIPT
        </Typography>
        <Typography variant="body2" color="text.secondary">
          In this we cover all about javascript
        </Typography>
      </CardContent>
      <CardActions className="text-orange-500 justify-between ">
        <Link
          to="/notes"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500" : "text-orange-500-700"
            } text-gray-300 hover:bg-orange-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
          }
        >
          Notes
        </Link>
        <Link
          to="/test-skill"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500" : "text-grey-700"
            } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
          }
        >
          Test Skills
        </Link>
      </CardActions>
    </Card>
  );
}

// export function TextRevealCardPreview() {
//   return (
//     <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem]  w-full">
//       <TextRevealCard
//         text="You know the business"
//         revealText="I know the chemistry "
//       >
//         <TextRevealCardTitle>
//           Sometimes, you just need to see it.
//         </TextRevealCardTitle>
//         <TextRevealCardDescription>
//           This is a text reveal card. Hover over the card to reveal the hidden
//           text.
//         </TextRevealCardDescription>
//       </TextRevealCard>
//     </div>
//   );
// }

// export function BackgroundBoxesDemo() {
//   return (
//     <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
//       <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

//       <Boxes />
//       <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
//       <img className='h-14 w-full items-start' src={logo} alt="Logo" />
//       </h1>
//       <p className="text-center mt-2 text-neutral-300 relative z-20">
//       JS LAB is a coding website focused on HTML, CSS, and JavaScript.
//        {/* The site likely provides resources, tutorials, and possibly interactive coding exercises to help users learn and improve their skills in web development. It seems tailored for individuals looking to enhance their proficiency in these foundational web technologies. For a detailed understanding, visiting the site directly would provide the most accurate and specific information. */}
//       </p>
//     </div>
//   );
// }

export default Home;

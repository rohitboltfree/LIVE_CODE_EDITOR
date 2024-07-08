// import React from 'react'
import { Boxes } from './ui/background-boxes';
import { cn } from '../utils/cn';
import logo from './logo.png';
import side2 from './side2.png';
import js_circle from './js_circle.png';
import home from './home.png';
import * as React from 'react';
import Lottie from 'lottie-react';
import animationData from '../utils/side3.json'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


// import {
//   TextRevealCard,
//   TextRevealCardDescription,
//   TextRevealCardTitle,
// } from './ui/text-reveal-card'

function Home() {
  return (
    <>
      <main className='bg-stone-900 text-white overflow-hidden overflow-y-scroll '>
            <section className='relative flex flex-wrap justify-between w-100vw max-w-75rem mx-0 my-auto overflow-hidden h-[calc(100vh_-_4rem)] '>
              <br/><br/>
                <div className='h-full w-100vw p-8 text-3xl flex flex-col justify-center   left-0 '>
                
                    <span className='text-amber-600'>Sometimes,</span><span className='text-3xl font-thin'>you just need to see it.</span><br/>
                    <img className=' top-15   object-cover text-center max-w-40 max-h-40' src={logo} alt="Logo" /><br/>
                    <span className='text-2xl font-thin'>JS LAB is a coding website focused on <br/> HTML, CSS, and JavaScript.</span>
                    <p className='text-lg font-thin'>You can learn many thing about html,css,JavaScript</p>
                </div>
                <div className='right-0  justify-end rounded-xl h-1/3 '>
                {/* <img className='h-100vh top-6' src={side2} alt="Logo" /> */}
                <Lottie className='' animationData={animationData} />
                </div>
              </section> 
              <section className='overflow-hidden w-100vw max-w-65rem flex flex-col justify-center align-text mx-0 my-auto text-center items-center ' >
                    <span className='font-bold text-5xl mb-6 pt-12  '>About of this site will do </span><br/>
                    <span className='font-normal text-lg px-0 py-8 max-w-4xl '>JS lab is skilled and passionate about HTML,CSS,JAVASCRIPT and have many thing that you can learn about these three</span>
                    <div className='m-6  w-3/4 text-left '>
                        <div className='flex m-1 px-6 py-8 rounded-lg  bg-zinc-800'>
                            <img className='rounded-3xl object-cover h-12 w-12 mr-8' src="https://e7.pngegg.com/pngimages/5/917/png-clipart-web-development-computer-icons-computer-programming-programmer-html-firm-miscellaneous-angle-thumbnail.png" alt="html" />
                            <div className=' '>
                                <h2 className=' '>HTML </h2>
                                <p className=' '>In this we cover all about html</p>
                            </div>
                        </div>
                    </div>
                    <div className='m-6  w-3/4 text-left '>
                    <div className='  flex m-1 px-6 py-8 rounded-lg  bg-zinc-800'>
                            <img className='rounded-3xl object-cover h-12 w-12 mr-8 bg-zinc-800' src="https://w7.pngwing.com/pngs/230/514/png-transparent-front-end-web-development-html-css-design-and-build-web-sites-cascading-style-sheets-stage-web-design-text-logo-thumbnail.png" alt="css" />
                            <div className=' '>
                                <h2 className=' '>css</h2>
                                <p className=' '>In this we cover all about css</p>
                            </div>
                        </div>
                    </div>
                    <div className='m-6  w-3/4 text-left '>
                    <div className='  flex m-1 px-6 py-8 rounded-lg  bg-zinc-800'>
                            <img className='rounded-3xl object-cover h-16 w-16 mr-8' src={js_circle} alt="js"/>
                            <div className=' '>
                                <h2 className=' '>javascript</h2>
                                <p className=' '>In this we cover all about javascript</p>
                            </div>
                        </div>
                    </div>
              </section>
              <section className='overflow-hidden w-100vw max-w-65rem flex flex-col justify-center align-text mx-0 my-auto text-center items-center ' >
                    <span className='font-bold text-5xl mb-4 pt-12  '>Features of this site will do </span><br/>
                    <span className='font-normal text-lg px-0 py-8 max-w-4xl '>JS lab is skilled and passionate about HTML,CSS,JAVASCRIPT and have many thing that you can learn about these three</span>
              <div className='flex flex-wrap justify-center '>
                <div className='m-8'><MediaCard1/></div>
                <div className='m-8'><MediaCard2/></div>
                <div className='m-8'><MediaCard3/></div>
              </div>
              </section>
              <footer className='w-100vw h-16 flex items-center justify-center font-extralight text-sm'>
                  Good you have completly visited Js Labs 
              </footer>
      </main> 
    </>
  )
}



    export function MediaCard1() {
      return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
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
          <CardActions >
            <Button size="small">Notes</Button>
            <Button size="small">Test Skills</Button>
          </CardActions>
        </Card>
      );
    }
    export function MediaCard2() {
      return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
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
          <CardActions>
              <Button size="small">Notes</Button>
              <Button size="small">Test Skills</Button>
          </CardActions>
        </Card>
      );
    }
    export function MediaCard3() {
      return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
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
          <CardActions>
                <Button size="small">Notes</Button>
                <Button size="small">Test Skills</Button>
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

export default Home

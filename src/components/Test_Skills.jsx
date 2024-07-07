import React, { useContext, useEffect, useState } from 'react'
import Quiz_html from '../Quiz_Editor/html_all/Quiz_html'
import Result_html from '../Quiz_Editor/html_all/Result_html'
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material';
import { myDocs } from '../utils/html_docs';
import Result_css from '../Quiz_Editor/css_all/Result_css';
import Quiz_js from '../Quiz_Editor/js_all/Quiz_js';
import Result_js from '../Quiz_Editor/js_all/Result_js';
import Quiz_css from '../Quiz_Editor/css_all/Quiz_css';




function Test_Skills() {

	const [toggle, setToggle] = useState(false)
    const [doc, setDoc] = useState(1);
    const [topic, setTopic] = useState(null);
    
    useEffect(()=>{
     setToggle(topic?.codeExample)
    setTopic(myDocs[0].topic[0])
    },[])

    useEffect(()=>{
        console.log(topic);
    },[topic])

  return (
    <>

	<div className='h-full  '>

			<div className="flex h-full bg-white flex-1">
			<div
                style={{
                    // display: toggle ? 'block' : 'none',
                    width: `${toggle ? '300px' : '0%'}`,
                    transition: 'all 0.5s ease',
                    overflow: `${toggle ? 'auto' : 'hidden'}`
                }}
                className="sidebar  flex flex-col justify-start  border">
                {myDocs.map(html_docs => {
                    return (
                        <>
                            <Accordion >
                                <AccordionSummary
                                    //   expandIcon={<ArrowDownwardIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography>{html_docs.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                    {html_docs.topic?.length > 0 && html_docs.topic.map(topic => {
                                        return (
                                            <>
                                            <div >
                                                <button
                                                    onClick={() => {
                                                        setTopic(topic)
                                                        {console.log(topic)}
                                                    }}
                                                    className='hover:bg-slate-600 hover:text-white border w-full text-left my-2 p-2'>{topic.title}</button> 
                                            </div>
                                            </>
                                        )
                                    })}
                                </AccordionDetails>
                            </Accordion>

                        </>
                    )
                })}
            </div>
			<div className="border border-red-500 w-full h-full">
                <div className="toggle">
                    <Button onClick={() => setToggle(!toggle)}>
                        {toggle ? 'Close' : 'Open'}</Button>
                </div>
                {/* {myDocs.map(html_docs =>{
                    return (
                       <>
                        {console.log(html_docs.topic.title)}
                        <Typography>{html_docs.topic.title}</Typography>
                       </>
                    )
                })} */}
                    {topic?.codeExample && <div>
                        <h1 className='w-fit h-fit p-6 m-2 font-extrabold'>{topic.subheading} </h1>
                        <div className='flex '>
                        <div className='max-w-15 overflow-auto flex-1'><Quiz_html codeExample={topic.codeExample}/></div>
                        <div className='flex-1 mb-2'><Result_html/></div>
                    </div>
                    </div> }
                    
			</div>
            
			
	</div>
	</div>
    </>
)
}

export default Test_Skills






// <main className='bg-black min-h-screen w-full justify-center'>
// <h1
// 	className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
// 	uppercase mt-10 mb-5'
// >
// 	&ldquo; AVAILABLE QUESTIONS &rdquo;
// </h1>
// <div className='bg-slate-900 relative overflow-x-auto w-3/4 mx-auto px-6 pb-10'>
// 	<table className='text-sm text-left w-3/4 text-gray-500 dark:text-gray-400 sm:w-7/12  max-w-[900px] mx-auto'>
		
// 			<thead className='text-xs w-3/4 text-gray-700 uppercase dark:text-gray-400 border-b '>
// 				<tr>
// 					<th scope='col' className='px-6 py-4 w-0 font-medium'>
// 						Status
// 					</th>
// 					<th scope='col' className='px-6 py-3 w-0 font-medium'>
// 						Title
// 					</th>
// 					<th scope='col' className='px-6 py-3 w-0 font-medium'>
// 						Difficulty
// 					</th>

// 					<th scope='col' className='px-6 py-3 w-0 font-medium'>
// 						Category
// 					</th>
// 					<th scope='col' className='px-6 py-3 w-0 font-medium'>
// 						Solution
// 					</th>
// 				</tr>
// 			</thead>
			 
// 	</table>
// </div>
// </main>
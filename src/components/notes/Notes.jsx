import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { myDocs } from '../../utils/docs';
import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';




const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald'
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Oswald'
    },
    text: {
        margin: 12,
        fontSize: 14,
        fontWeight:28,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});
const Notes = () => {
    const [toggle, setToggle] = useState(false)
    const [doc, setDoc] = useState(1);
    const [topic, setTopic] = useState(null);

    useEffect(()=>{
        setToggle(topic?.codeExample)
       setTopic(myDocs[0].topics[0])
       },[])

    return (
        <div className="flex h-fit bg-gray-100 flex-1">
            <div
                style={{
                    // display: toggle ? 'block' : 'none',
                    width: `${toggle ? '300px' : '0%'}`,
                    transition: 'all 0.5s ease',
                    overflow: `${toggle ? 'auto' : 'hidden'}`
                }}
                className="sidebar  flex flex-col justify-start  border">
                {myDocs.map(doc => {
                    return (
                        <>
                            <Accordion >
                                <AccordionSummary
                                    //   expandIcon={<ArrowDownwardIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography>{doc.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                    {doc.topics?.length > 0 && doc.topics.map(topic => {
                                        return (
                                            <div >
                                                <button
                    
                                                    onClick={() => {
                                                        setTopic(topic)
                                                    }}
                                                    className='hover:bg-slate-600 hover:text-white border w-full text-left my-2 p-2'>{topic.title}</button>
                                            </div>
                                        )
                                    })}
                                </AccordionDetails>
                            </Accordion>

                        </>
                    )
                })}
            </div>
            <div className="border border-red-500 bg-gray-200  w-full">
                <div className="toggle">
                    <Button onClick={() => setToggle(!toggle)}>{toggle ? 'Close' : 'Open'}</Button>
                </div>
                <section 
                    className=""
                
                >
                    {topic && <Document>
                        <Page size="A4" style={styles.body} className=" mb-12 overscroll-y-auto flex flex-col justify-center items-center h- overflow-y-scroll max-w-3xl min-w-96 mx-auto py-6 px-1 bg-white  text-3xl drop-shadow-lg">
                            <Text style={styles.title} className="text-[#8F5272] font-bold" break>{topic.title}</Text>
                            <br />
                            <img
                                className   ="text-left"
                                style={styles.image}
                                src={topic?.img?.src}
                                height={topic?.img?.size} 
                                width={topic?.img?.size  ?? '96px'} 
                            />
                            {/* <Text style={styles.text} className="py-6  bg-white text-3xl "> */}
                            {
                                topic.paragraph.map((para, index) => {
                                    return (
                                        <Text key={index} style={styles.text} className="bg-white text-3xl text-start " break>{para}</Text>
                                    )
                                })
                            }
                            {/* </Text> */}
                        </Page>
                    </Document>}
                </section>

            </div>
        </div>
    )
}

export default Notes
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Quiz_html from "../Quiz_Editor/html_all/Quiz_html";
import Result_html from "../Quiz_Editor/html_all/Result_html";
import { myDocs } from "../utils/html_docs";

function Test_Skills() {
  const [toggle, setToggle] = useState(false);
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    setToggle(topic?.codeExample);
    setTopic(myDocs[0].topic[0]);
  }, []);

  useEffect(() => {
    console.log(topic);
  }, [topic]);

  return (
    <>
      <div className="h-full  ">
        <div className="flex h-full bg-white flex-1">
        <Box 
                style={{
                    // display: toggle ? 'block' : 'none',
                    transition: 'all 0.5s ease',
                    overflow: `${toggle ? 'auto' : 'hidden'}`,
                    transform: `${toggle ? 'translateX(0)' : 'translateX(-100%)'}`,
                }}
                className={`fixed bottom-0 top-0 z-10 min-w-72 bg-white shadow-md transition-all p-3 `}>
                <Button
                variant="outlined"
                sx={{
                    mb:2
                }}
                onClick={() => setToggle(!toggle)}>{toggle ? 'Close' : 'Open'}</Button>
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
                                            <div key={topic}>
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
            </Box>
          <div className="border border-red-500 w-full h-full">
            <div className="toggle">
              <Button onClick={() => setToggle(!toggle)}>
                {toggle ? "Close" : "Open"}
              </Button>
            </div>
            {topic?.codeExample && (
              <div>
                <h1 className="w-fit h-fit p-6 m-2 font-extrabold">
                  {topic.subheading}{" "}
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="max-w-15 overflow-auto flex-1">
                    <Quiz_html codeExample={topic.codeExample} />
                  </div>
                  <div className="flex-1 mb-2">
                    <Result_html />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Test_Skills;
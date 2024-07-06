import React from 'react'
import { useContext } from 'react';
import Editor from './Editor'
import {Box, Button, styled} from '@mui/material';
// import { DataContext } from '../Context/DataProvider';
import { EditorContext } from '../components/PracticeJS';
import { Height } from '@mui/icons-material';



const Container = styled(Box)`
      display: flex;
      background-color:#060606;
      height:50vh;
`




function Data() {

    const { html,setHtml,css,setCss,js,setJs,setHead,head } = useContext(EditorContext);
    console.log(html)
    
    return (
      <Container>
         <Editor 
            heading="HEAD"
            icon="<>"
            color="#FF3C41" 
            value={head}
            onChange={setHead} 
            />
        <Editor 
            heading="HTML"
            icon="<>"
            color="#FF3C41" 
            value={html}
            onChange={setHtml} 
            />
        <Editor 
             heading="CSS"
             icon="{}"
             color="#0EBEFF"
             value={css}
             onChange={setCss}
             />
            
        <Editor
             heading="JavaScrpit"
             icon="()"
             color="#FCD000"
             value={js}
            onChange={setJs}
            
            />
      </Container>
    )
  }
  

export default Data

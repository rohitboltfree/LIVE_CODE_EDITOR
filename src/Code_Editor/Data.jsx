import React from 'react'
import { useContext } from 'react';
import Editor from './Editor'
import {Box, styled} from '@mui/material';
// import { DataContext } from '../Context/DataProvider';
import { EditorContext } from '../components/PracticeJS';
import { Height } from '@mui/icons-material';



const Container = styled(Box)`
      display: flex;
      background-color:#060606;
`




function Data() {

    const { html,setHtml,css,setCss,js,setJs } = useContext(EditorContext);
    console.log(html)
    
    return (
      <Container sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}>
        <Editor 
            heading="HTML"
            icon="<>"
            color="#FF3C41" 
            value={html}
            onChange={setHtml} 
            style={'controlled-editor '}
            />
        <Editor 
             heading="CSS"
             icon="{}"
             color="#0EBEFF"
             value={css}
             onChange={setCss}
            style={'controlled-editor'}

             />
            
        <Editor
             heading="JavaScrpit"
             icon="()"
             color="#FCD000"
             value={js}
            onChange={setJs}
            style={'controlled-editor'}
            />
      </Container>
    )
  }
  

export default Data

import React from 'react'
import { Box } from '@mui/material'
import { useContext,useEffect,useState } from 'react'
import { EditorContext } from '../../components/PracticeJS';

function Result_html() {
    
    const[src, setSrc] = useState('');
    const{ html }=useContext(EditorContext);

    const srcCode=`
        <html>
            <head>${html}</head>
        </html>

    `
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setSrc(srcCode);
        },1000)
        return ()=> clearTimeout(timeOut);
    },[ html ])

  return (
    <>
        <iframe
            srcDoc={src}
            title='Output'
            // sandbox='allow-scripts'
            // width='50%'
           
            style={{
              border:'1px solid red',
              height:'100%',
              width:'100%',
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        />
    </>
  )
}

export default Result_html

import React from 'react'
import { useContext,useEffect,useState } from 'react'
import { EditorContext } from '../../components/PracticeJS';


function Result_css() {

    const[src, setSrc] = useState('');
    const{ css , html}=useContext(EditorContext);

    const srcCode=`
        <html>
            <head>${html}</head>
            <style>${css}</style>
        </html>

    `
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setSrc(srcCode);
        },1000)
        return ()=> clearTimeout(timeOut);
    },[ html,css ])

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

export default Result_css

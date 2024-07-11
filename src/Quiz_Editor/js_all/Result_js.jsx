import React from 'react'
import { useContext,useEffect,useState } from 'react'
import { EditorContext } from '../../components/PracticeJS';

function Result_js() {

    const[src, setSrc] = useState('');
    const{ js }=useContext(EditorContext);

    const srcCode=`
        <html>
            <script>${js} </script>
        </html>

    `
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setSrc(srcCode);
        },1000)
        return ()=> clearTimeout(timeOut);
    },[ js ])

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

export default Result_js

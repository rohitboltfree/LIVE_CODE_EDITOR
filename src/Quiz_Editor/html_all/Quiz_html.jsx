import React, { useContext, useEffect } from 'react'
import { EditorContext } from '../../components/PracticeJS';
import Editor from '../../Code_Editor/Editor';


function Quiz_html({codeExample}) {

  const { html,setHtml} = useContext(EditorContext);
  useEffect(()=>{
    // console.log(codeExample)
        setHtml(codeExample)
  },[codeExample])
  return (
    <>
      <div className='h-full w-full border-solid  border-gray-900'>
      <Editor
			heading="EDITOR"
            icon="<>"
            color="#FF3C41" 
            value={html}
            onChange={setHtml} 
            style='min-h-60 '
		/>
      </div>
    </>
  )
}

export default Quiz_html

import React, { useContext, useEffect } from 'react'
import Editor from '../../Code_Editor/Editor'
import { EditorContext } from '../../components/PracticeJS';

function Quiz_css({codeExample}) {
    
    const { css,setCss} = useContext(EditorContext);
    useEffect(()=>{
          setCss(codeExample)
    },[codeExample])

  return (
    <>
      <div className='h-full w-full border-solid  border-gray-900'>
      <Editor
			heading="CSS"
            icon="<>"
            color="#FF3C41" 
            value={css}
            onChange={setCss} 
            style='min-h-60 '
		/>
        </div>
    </>
  )
}

export default Quiz_css

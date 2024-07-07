import React, { useContext, useEffect } from 'react'
import Editor from '../../Code_Editor/Editor'
import { EditorContext } from '../../components/PracticeJS';

function Quiz_js({codeExample}) {

    const { js,setJs} = useContext(EditorContext);
    useEffect(()=>{
          setJs(codeExample)
    },[codeExample])

  return (
    <>
      <div className='h-full w-full border-solid  border-gray-900'>
      <Editor
			heading="javascrpit"
            icon="<>"
            color="#FF3C41" 
            value={js}
            onChange={setJs} 
            style='min-h-60 '
		/>
        </div>
    </>
  )
}

export default Quiz_js

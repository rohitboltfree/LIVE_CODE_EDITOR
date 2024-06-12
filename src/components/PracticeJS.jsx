import React, { createContext, useState } from 'react'
// import Code from '../Code_Editor/Code';
import Data from '../Code_Editor/Data';
import Result from '../Code_Editor/Result';
import DataProvider from '../Context/DataProvider'

export const EditorContext = createContext(null);

function PracticeJS() {
  const [html, setHtml] = useState('<h1>Hello</h1>');
  const [css, setCss]= useState(''); 
  const [js, setJs]= useState(''); 


  return (
    <>
      {/* <DataProvider> */}
      <EditorContext.Provider value={{
        html,setHtml,
        css,setCss,
        js,setJs
      }}>

          <Data/>
          <Result/>
      </EditorContext.Provider>
      {/* </DataProvider> */}
    </>
  )
}

export default PracticeJS

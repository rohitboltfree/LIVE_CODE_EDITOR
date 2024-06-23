import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import PracticeJS from './components/PracticeJS.jsx'
// import Code from '../Code_Editor/Code'
import Data from './Code_Editor/Data.jsx'
import Questions from './components/Questions.jsx'
import Notes from './components/notes/Notes.jsx'

// import Editor from './CodeEditor/Editor'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout/> }>
      <Route  path='' element={ <Home/> } />
      <Route  path='notes' element={ <Notes/> } />
      <Route  path='playground' element={ <PracticeJS/> } >
        <Route  path=':id' element={ <PracticeJS/>  } />
      </Route>
      <Route  path='PracticeJS/Code' element={ <Data/> } />
      {/* <Route  path='Theory/Html_notes' element={ <Html_notes/> } />
      <Route  path='Theory/Css' element={ <Css/> } />
      <Route  path='Theory/Javascript' element={ <Javascript/> } /> */}
      <Route  path='Questions' element={ <Questions/> } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <>
    <RouterProvider router={router}/>
  </>
);

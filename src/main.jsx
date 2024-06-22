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
import Theory from './components/Theory.jsx'
import Questions from './components/Questions.jsx'
// import Editor from './CodeEditor/Editor'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout/> }>
      <Route  path='' element={ <Home/> } />
      <Route  path='PracticeJS' element={ <PracticeJS/> } />
      <Route  path='PracticeJS/Code' element={ <Data/> } />
      <Route  path='Theory' element={ <Theory/> } />
      <Route  path='Questions' element={ <Questions/> } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <>
    <RouterProvider router={router}/>
  </>
);

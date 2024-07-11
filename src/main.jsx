import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Data from './Code_Editor/Data.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import PracticeJS from './components/PracticeJS.jsx'
import Test_Skills from './components/Test_Skills.jsx'
import Notes from './components/notes/Notes.jsx'
import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout/> }>
      <Route  path='' element={ <Home/> } />
      <Route  path='notes' element={ <Notes/> } />
      <Route  path='PracticeJS/Code' element={ <Data/> } />
      <Route  path='test-skill' element={ <Test_Skills/> } />
      <Route  path='playground' element={ <PracticeJS/> } >
          <Route  path=':id' element={ <PracticeJS/>  } />
        <Route  path=':fileName' element={ <PracticeJS/>  } />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <>
    <RouterProvider router={router}/>
  </>
);

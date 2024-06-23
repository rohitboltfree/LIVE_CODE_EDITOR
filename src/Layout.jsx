import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import UserProvider, { useUser } from './Context/User';
import { useState } from 'react';
import { EditorContext } from './components/PracticeJS';





function Layout() {
  const [html, setHtml] = useState('<h1>Hello</h1>');
  const [css, setCss]= useState(''); 
  const [js, setJs]= useState(''); 
  return (
    <>
    <UserProvider>
    <EditorContext.Provider value={{
        html,setHtml,
        css,setCss,
        js,setJs
      }}>
      
      <Header/>
      <Outlet/>
      </EditorContext.Provider>

    </UserProvider>
      
    </>
  )
}

export default Layout

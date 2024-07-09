import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { EditorContext } from './components/PracticeJS';
import UserProvider from './Context/User';





function Layout() {
  const [html, setHtml] = useState('<h1>Hello</h1>');
  const [css, setCss]= useState(''); 
  const [js, setJs]= useState(''); 
  return (
    <>
    <Toaster/>
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

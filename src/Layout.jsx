import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Auth from './components/auth/Auth';
import { useEffect } from 'react';
import UserProvider, { useUser } from './Context/User';



function Layout() {
  const user = useUser();

  useEffect(()=>{
    console.log(user);
  },[user]);
  return (
    <>
    <UserProvider>
      <Header/>
      <Outlet/>
      {
      !user ?  <Auth/> : 
      <h1> Welcome {user.displayName}</h1>
      }
    </UserProvider>
      
    </>
  )
}

export default Layout

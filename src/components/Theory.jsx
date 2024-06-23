import React from "react";
import { NavLink } from "react-router-dom";

const Theory =()=>{

  return(

      <div className="w-64 bg-gray-700 fixed h-full">
        <div>
          <h1 className="text-2x text-white font-bold ">TUTORIALS</h1>
        </div>
        <ul className="flex  mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                <li
                    to="/"
                    className={({ isActive }) =>
                      `${isActive ? 'text-white' : 'text-grey-700'} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`

                    }
                  >
                    HTML
                  
                </li>
        </ul>

      </div>

  )

}
export default Theory






















// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';



// <Box style={{

// }}>
// <Drawer
//         style={{
//           position:'relative',
//         }}
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader >
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Main  
        
//       open={open}>
        
        
//       </Main>
// </Box>


// import React, { useState } from 'react'
// import Html_notes from './TheoryNotes/Html_notes';
// import Javascript from './TheoryNotes/Javascript';
// import Css from './TheoryNotes/Css';
// import { Button } from '@mui/material';
// import { Link, NavLink } from 'react-router-dom'

// function Theory() {


//   const [toggle, setToggle] = useState(false)
//   const [doc,setDoc] = useState(1);



//   return (
//      <div className=" flex h-full  overflow-hidden">
//       <div  
//       style={{
//         position:'sticky',
//         // transform: `${!toggle? 'translateX(-100%)' : 'translateX(0)'}`,
//         width: `${!toggle? '0' : '15rem'}`
//       }}
//       className="left border w-60 h-full transition-all overflow-y-scroll border-y-8">

//         <div className='flex flex-col'>
       
//       <div
//         style={{
//           // width: `${toggle ? 'calc(100vw - 15rem)' :'100%'}`

//         }}
//       className="right flex-1 border h-full ml-auto transition-all overflow-y-scroll">
//         <Button
//         onClick={()=>{
//           setToggle(()=>!toggle)
//          }}
//         >Toggle</Button>

//         {doc}
//       </div>
//       </div>
//      </div> 
//      </div>
//   )
// }

// // ReactDOM.render(<Theory />, document.getElementById('root'));
// export default Theory


 
// {
//   [<Html_notes/>,<Css/>,<Javascript/>].map((e,i)=>{
//     return(
//       <Button
//       onClick={()=>setDoc(e)}
//       >
//         {i+1}
//       </Button>
//     )
//   })
// }

// // import React from 'react'
// // import '../../App.css'
// // import { Box , styled, useTheme} from '@mui/material';
// // import CloseIcon from '@mui/icons-material/Close';
// // import { Controlled as ControlledEditor } from 'react-codemirror2'
// // import 'codemirror/lib/codemirror.css';
// // import 'codemirror/theme/material.css';
// // import 'codemirror/mode/xml/xml';
// // import 'codemirror/mode/css/css';
// // import 'codemirror/mode/javascript/javascript';

// // // mui
// // import Drawer from '@mui/material/Drawer';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import MuiAppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import List from '@mui/material/List';
// // import Typography from '@mui/material/Typography';
// // import Divider from '@mui/material/Divider';
// // import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// // import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// // import ListItem from '@mui/material/ListItem';
// // import ListItemButton from '@mui/material/ListItemButton';
// // import ListItemIcon from '@mui/material/ListItemIcon';
// // import ListItemText from '@mui/material/ListItemText';
// // import InboxIcon from '@mui/icons-material/MoveToInbox';
// // import MailIcon from '@mui/icons-material/Mail';
// // // mui end
 
// // const Heading = styled(Box)`
// //       background: #1d1e22;
// //       display: flex;
// //       padding: 9px 12px ;

// // `;
// // const Header = styled(Box)`
// //     display: flex;
// //     justify-content: space-between;
// //     background: #060606;
// //     color: #AAAEBC;
// //     font-weight: 700;
// //     align-item: center;
// // `

// // function Editor() {
// //   return (
// //     <>
// //     {/* NEW */}
// //     <PersistentDrawerLeft/>


    
// //     {/* <div className='flex items-center bg-slate-600 w-full h-96 '>
// //     <div className='bg-slate-900 w-30 h-96'>
// //         <div> New File </div>
// //         <div> Projects </div>
// //         <div> Save </div>
// //     </div>
// //     <div className='w-full bg-slate-200 h-48'>
// //       good 
// //     </div>
// //     </div>
// //      */}
// //      <div className="flex h-3/5 mt-auto">
// //       {/* Left Side */}
// //       {/* <div className=" w-1/4 bg-gray-200 p-2 flex flex-col">
// //         Menu
// //         <ul>
// //           <li className="py-2 flex items-center justify-center ">New File</li>
// //           <li className="py-2 flex items-center justify-center">Project</li>
// //           <li className="py-2 flex items-center justify-center">Save</li>
// //         </ul>
// //       </div> */}

// //       {/* Right Side */}
// //       {/* <div className=" w-full bg-slate-400 p-4 flex flex-col">
// //             <div className=' flex items-center justify-start  bg-slate-400'>
// //               <div>html</div>
// //               <div>css</div>
// //               <div>js</div>
// //             </div>
// //             <div>input</div>
// //             <div>input</div>
// //             <div>input</div>
// //       </div> */}
// //         {/* // Right side */}
// //           {/* <Box>
// //              <Header>
// //                 <Heading>
// //                       <Box component="span"
// //                             className=' flex h-6 w-6 place-content-center bg-slate-600 mr-2  justify-center items-center '
// //                         >/</Box>
// //                         HTML 
// //                 </Heading>
// //                   <CloseIcon/>
// //              </Header>
// //              <ControlledEditor 
// //                     className=' controlled-editor'
// //                     options={{
// //                       theme:'material',
// //                       lineNumbers:true
// //                     }}
// //                     />
// //           </Box> */}
// //     </div>
// //     <div className='h-2/6  bg-white w-full p-4 '>
// //       output field 
// //     </div>


    
// //     </>
// //   )
// // }

// // export default Editor

// // const drawerWidth = 240;

// // const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
// //   ({ theme, open }) => ({
// //     flexGrow: 1,
// //     padding: theme.spacing(3),
// //     transition: theme.transitions.create('margin', {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.leavingScreen,
// //     }),
// //     marginLeft: `-${drawerWidth}px`,
// //     ...(open && {
// //       transition: theme.transitions.create('margin', {
// //         easing: theme.transitions.easing.easeOut,
// //         duration: theme.transitions.duration.enteringScreen,
// //       }),
// //       marginLeft: 0,
// //     }),
// //   }),
// // );

// // const AppBar = styled(MuiAppBar, {
// //   shouldForwardProp: (prop) => prop !== 'open',
// // })(({ theme, open }) => ({
// //   transition: theme.transitions.create(['margin', 'width'], {
// //     easing: theme.transitions.easing.sharp,
// //     duration: theme.transitions.duration.leavingScreen,
// //   }),
// //   ...(open && {
// //     width: `calc(100% - ${drawerWidth}px)`,
// //     marginLeft: `${drawerWidth}px`,
// //     transition: theme.transitions.create(['margin', 'width'], {
// //       easing: theme.transitions.easing.easeOut,
// //       duration: theme.transitions.duration.enteringScreen,
// //     }),
// //   }),
// // }));

// // const DrawerHeader = styled('div')(({ theme }) => ({
// //   display: 'flex',
// //   alignItems: 'center',
// //   padding: theme.spacing(0, 1),
// //   // necessary for content to be below app bar
// //   ...theme.mixins.toolbar,
// //   justifyContent: 'flex-end',
// // }));

// // function PersistentDrawerLeft() {
// //   const theme = useTheme();
// //   const [open, setOpen] = React.useState(false);

// //   const handleDrawerOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleDrawerClose = () => {
// //     setOpen(false);
// //   };

// //   return (
// //     <Box sx={{ display: 'flex' }}>
// //       <CssBaseline />
// //       <Box className='p-4 w-4 h-96 bg-slate-500 flex align-top justify-start'>
// //       <Toolbar>
// //       <IconButton

// //             className='bg-blue-400'
// //             color="inherit"
// //             aria-label="open drawer"
// //             onClick={handleDrawerOpen}
// //             edge="start"
// //             sx={{ mr: 2, ...(open && { display: 'none' }) }}
// //           >
// //             <MenuIcon />
// //           </IconButton>
// //           {/* <Typography variant="h6" noWrap component="div" className='bg-blue-400'>
// //            JS_INFINITY_LAB
// //           </Typography> */}
// //         </Toolbar>
// //       </Box>

// //       {/* <AppBar position="fixed" open={open}>
// //         <Toolbar>
// //           <IconButton
// //             color="inherit"
// //             aria-label="open drawer"
// //             onClick={handleDrawerOpen}
// //             edge="start"
// //             sx={{ mr: 2, ...(open && { display: 'none' }) }}
// //           >
// //             <MenuIcon />
// //           </IconButton>
// //           <Typography variant="h6" noWrap component="div">
// //            JS_INFINITY_LAB
// //           </Typography>
// //         </Toolbar>
// //       </AppBar> */}
     
// //       <Drawer
// //         sx={{
// //           width: drawerWidth,
// //           flexShrink: 0,
// //           '& .MuiDrawer-paper': {
// //             width: drawerWidth,
// //             boxSizing: 'border-box',
// //           },
// //         }}
// //         variant="persistent"
// //         anchor="left"
// //         open={open}
// //       >
// //         <DrawerHeader>
// //           <IconButton onClick={handleDrawerClose}>
// //             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
// //           </IconButton>
// //         </DrawerHeader>
// //         <Divider />
// //         <List>
// //           {['New File', 'Projects', 'Save'].map((text, index) => (
// //             <ListItem key={text} disablePadding>
// //               <ListItemButton>
// //                 <ListItemIcon>
// //                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
// //                 </ListItemIcon>
// //                 <ListItemText primary={text} />
// //               </ListItemButton>
// //             </ListItem>
// //           ))}
// //         </List>
// //         <Divider />
// //       </Drawer>
// //       <Main open={open}>
// //         <DrawerHeader />
// //         <Box>
// //              <Header>
// //                 <Heading>
// //                       <Box component="span"
// //                             className=' flex h-6 w-6 place-content-center bg-slate-600 mr-2  justify-center items-center '
// //                         >/</Box>
// //                         HTML 
// //                 </Heading>
// //                   <CloseIcon/>
// //              </Header>
// //              <ControlledEditor 
// //                     className=' controlled-editor'
// //                     options={{
// //                       theme:'material',
// //                       lineNumbers:true
// //                     }}
// //                     />
// //           </Box>
// //       </Main>
// //     </Box>
// //   );
// // }


// import React, { useContext } from 'react'
// import { EditorContext } from '../components/PracticeJS'

// const Test = () => {
//     const data = useContext(EditorContext)
//     console.log(data)
//   return (
//     <div>
//       TEST
//     </div>
//   )
// }

// export default Test

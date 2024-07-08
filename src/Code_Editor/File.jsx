import React, { useContext, useEffect, useState } from 'react'
import { Box, styled,Button, Avatar} from '@mui/material';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../Context/User';
import { EditorContext } from '../components/PracticeJS';


function File() {

    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const { html, css, js, setHtml, setCss, setJs } = useContext(EditorContext);
  
    const { user, setUser } = useUser();
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    // useEffect(() => {
    //   (async () => {
       
    //   })()
    // }, []);
  
    console.log('user', user)
  
    const handleSave = async () => {
      //  only update the existing file
      if (params.id) {
        await saveCode(html, css, js, params.id);
      } else {
        // create a new file
        const id = await createCode(html, css, js);
        const data = await getAllCodes();
        setUser({
          ...user,
          currentFile: data[data.length - 1],
          files: data,
        })
        navigate(`/playground/${id}`);
      }
    }
  
    const handleEditFileName = async () => {
      const name = prompt('Enter new file name');
      const id = params.id;
      if (name && id) {
        const res = await addFileName(id,name);
        console.log('id', res)
        // const data = await getAllCodes();
        // setUser({
        //   ...user,
        //   currentFile: data[data.length - 1],
        //   files: data,
        // })
        // navigate(`/playground/${id}`);
      }
    }

  return (
    <>
       <section className='flex justify-center'>
      {
            (user?.userDetail)  && location.pathname.includes('/playground/') && (
              <Button
              sx={{ width:150, height: 28 ,marginBottom: 1}}
                onClick={handleEditFileName}
                variant='contained'>
                Edit File Name
              </Button>
            )
          }
          {
            (user?.userDetail)  && location.pathname.includes('/playground') && (
              <Button
              sx={{ width: 28, height: 28 ,marginBottom: 1}}
                onClick={handleSave}
                variant='contained'>
                Save
              </Button>
            )
          }
          {
            (user?.userDetail) && location.pathname.includes('/playground/') && (
              <Button
              sx={{ width: 28, height: 28,marginBottom: 1 }}
                onClick={() => {
                  setUser({
                    ...user,
                    currentFile: null
                  })
                  setHtml('');
                  setCss('');
                  setJs('');

                  navigate('/playground')
                }}
                variant='contained'>
                New
              </Button>
            )
          }
          {/* <Link
            to="#"
            onClick={() => {
              setOpen(true)
            }}
            className="inline-flex items-center justify-center px-3 py-2 font-medium text-slim rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          >
            {user?.userDetail ? <Avatar sx={{ width: 28, height: 28 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              : 'Log in'}
          </Link> */}
      </section>
    </>
  )
}

export default File

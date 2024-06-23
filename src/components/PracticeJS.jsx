import { createContext, useContext, useEffect, useState } from 'react'
// import Code from '../Code_Editor/Code';
import Data from '../Code_Editor/Data';
import Result from '../Code_Editor/Result';
import { getAllCodes } from '../config/firebase';
import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useUser } from '../Context/User';
// import DataProvider from '../Context/DataProvider'

export const EditorContext = createContext(null);

function PracticeJS() {
  const { setHtml, setCss, setJs } = useContext(EditorContext);
  const [files, setFiles] = useState([]);
  const params = useParams();
  const { user } = useUser();

  useEffect(() => {
    (async () => {
      const data = await getAllCodes();
      setFiles(data);
    })()
  }, []);

  useEffect(() => {
    files.forEach((file) => {
      if (file.id === params.id) {
        setHtml(file.html);
        setCss(file.css);
        setJs(file.js);
      }
    })
  }, [files, params]);

  return (
    <>
      {/* <DataProvider> */}
      {/* create a folder  */}
      {
        user?.userDetail && files.map((file) => {
          return (
            <Link to={`/playground/${file.id}`}>
              <Button className='bg-gray-400' key={file.id}>
                {file.id}
              </Button>
            </Link>
          )
        })
      }

      <Data />
      <Result />
      {/* </DataProvider> */}
    </>
  )
}

export default PracticeJS

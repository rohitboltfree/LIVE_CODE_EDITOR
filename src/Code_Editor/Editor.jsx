import React, { useState } from 'react'
import { Box, styled } from '@mui/material';
import { Controlled as ControlledEditor } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import CloseIcon from '@mui/icons-material/Close';

const Container = styled(Box)`
      flex-grow:1;
      flex-basis:0;
      display: flex;
      flex-direction:column;
      padding: 0px 8px 8px ;
  
`

const Heading = styled(Box)`
      background: #1d1e22;
      display: flex;
      padding: 9px 12px;

`;
const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    background: #060606;
    color: #AAAEBC;
    font-weight: 700;
    align-item: center;
`

function Editor({ heading, icon, color, value, onChange,style }) {

  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  }

  return (
    <>
      <Container style={open ? null : { flexGrow: 0 }}>
        <Header>
          <Heading>
            <Box component="span"
              className=' flex h-6 w-6 place-content-center  justify-center items-center '
              styled={{
                Background: { color }
              }}
            >{icon}</Box>
            {heading}
          </Heading>
          <CloseIcon
            fontSize='small'
            style={{ alignSelf: 'center' }}
            onClick={() => setOpen(prevstate => !prevstate)}
          />
        </Header>
        <ControlledEditor
          className={`flex-1 overflow-y-auto h-full ${style}`}
          value={value}
          onBeforeChange={handleChange}
          options={{
            theme: 'material',
            lineNumbers: true,
            mode: 'markdown'
          }}
        />
      </Container>
    </>
  )
}

export default Editor

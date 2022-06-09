import './code-modal.scss'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {darcula} from "react-syntax-highlighter/src/styles/prism";
import {androidstudio} from "react-syntax-highlighter/src/styles/hljs";
import {Modal} from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useState} from "react";


import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai"


export const CodeModal = ({isOpen, handleClose}) => {
    const [code,setCode] = useState('');
    console.log(darcula)
    return(
        <Modal
            open={isOpen}
            onClose={handleClose}
        >
            <Box className='modal-content'>
                <div id="modal-modal-description" style={{margin:15}}>
                    <AceEditor
                        placeholder="Ваш код..."
                        mode="javascript"
                        theme="monokai"
                        name="blah2"
                        onChange={value=>setCode(value)}
                        fontSize={16}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={code}
                        className='code-input'
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: false,
                            showLineNumbers: false,
                            tabSize: 2,
                        }}/>
                    {/*<SyntaxHighlighter language="javascript" style={darcula} wrapLines={true}>*/}
                    {/*    {code}*/}
                    {/*</SyntaxHighlighter>*/}
                    <div className='modal-send'>
                        <button className='send-btn'>Отправить</button>
                    </div>
                </div>
            </Box>
        </Modal>
        )


}

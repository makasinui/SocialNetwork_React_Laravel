import './code-modal.scss'

import PropTypes from 'prop-types';

import {Modal} from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import {Execute} from "./components/execute/Execute";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const CodeModal = ({isOpen, handleClose}) => {
    const [codeJS,setCodeJS] = useState('');
    const [codeHTML,setCodeHTML] = useState('');
    const [codeCSS,setCodeCSS] = useState('');
    const [srcDoc, setSrcDoc] = useState('')

    const languages = [
        "javascript",
        "html",
        "css"
    ];

    languages.forEach(lang => {
        require(`ace-builds/src-noconflict/mode-${lang}`);
        require(`ace-builds/src-noconflict/snippets/${lang}`);
    });

    const runCode = () => {
        setSrcDoc(
            `
                <html>
                    <style>${codeCSS}</style>
                    <body>${codeHTML}</body>
                    <script>${codeJS}</script>
                </html>
            `
        )
    }

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <Modal
            open={isOpen}
            onClose={handleClose}
        >
            <Box className='modal-content'>
                <div id="modal-modal-description" style={{margin:15}}>
                    <Tabs value={value} onChange={handleChange} className='modal-tabs' centered>
                        <Tab label="HTML" {...a11yProps(0)} />
                        <Tab label="CSS" {...a11yProps(1)} />
                        <Tab label="JS" {...a11yProps(2)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <AceEditor
                        placeholder="Ваш код..."
                        mode="html"
                        theme="monokai"
                        name="blah2"
                        onChange={value => setCodeHTML(value)}
                        fontSize={16}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={codeHTML}
                        className='code-input'
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: false,
                            tabSize: 2,
                        }}/>
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <AceEditor
                            placeholder="Ваш код..."
                            mode="css"
                            theme="monokai"
                            name="blah2"
                            onChange={value => setCodeCSS(value)}
                            fontSize={16}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={codeCSS}
                            className='code-input'
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: true,
                                showLineNumbers: false,
                                tabSize: 2,
                            }}/>
                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        <AceEditor
                            placeholder="Ваш код..."
                            mode="javascript"
                            theme="monokai"
                            name="blah2"
                            onChange={value => setCodeJS(value)}
                            fontSize={16}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={codeJS}
                            className='code-input'
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: true,
                                showLineNumbers: false,
                                tabSize: 2,
                            }}/>
                    </TabPanel>

                    <div className='modal-send'>
                        <Execute srcDoc={srcDoc} runCode={runCode}/>
                    </div>
                </div>
            </Box>
        </Modal>
        )
}

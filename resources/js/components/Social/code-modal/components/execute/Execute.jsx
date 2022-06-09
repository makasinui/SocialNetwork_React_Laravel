import {Button} from "@mui/material";

export const Execute = ({srcDoc, runCode}) => (
    <div className='code-executor'>
        <button onClick={runCode} >RUN</button>
        <iframe
            srcDoc={srcDoc}
            title='output'
            // разрешаем выполнение скриптов
            sandbox='allow-scripts'
        />
    </div>
)

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main'

function App (){
    return(
        <Main />
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(
        <App />, document.getElementById('app'));
}


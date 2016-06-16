import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';

const App = () => {
    return <Board rows={3} columns={3}/>
}

ReactDOM.render(
    <App/>, document.querySelector('.container'));

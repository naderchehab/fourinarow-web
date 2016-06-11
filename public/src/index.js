import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';

const App = () => {
    return <Board rows={5} columns={7} columnStatus={[1,2,3,1,2,0,3]} />
}

ReactDOM.render(<App />, document.querySelector('.container'));

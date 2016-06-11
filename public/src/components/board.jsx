import React, {Component} from 'react';
import Column from './column';

class Board extends Component {
    render() {
        let columns = [];
        for (let i = 0; i < this.props.columns; i++) {
            columns.push(<Column key={'column' + i} rows={this.props.rows}/>);
        }
        return (
            <div className='column'>
                {columns}
            </div>
        );
    }
}

export default Board;

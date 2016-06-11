import React, { Component } from 'react';
import Disc from './disc';

class Column extends Component {
    handleClick()  {

    }
    render() {
        let discs = [];
        for (let i = 0; i < this.props.rows; i++) {
            let occupied = false;

            if (i > this.props.rows - this.props.occupiedDiscs - 1) {
                occupied = true;
            }
            discs.push(<Disc key={'disc' + i} occupied={occupied} />);
        }
        return (
            <div className='column'>
                {discs}
            </div>
        );
    }
}

export default Column;

import React, {Component} from 'react';
import Disc from './disc';

class Column extends Component {
    constructor() {
        super();
        this.state = {
            occupiedDiscs: 0
        };
    }

    handleClick() {
        if (this.state.occupiedDiscs < this.props.rows) {
            this.setState({
                occupiedDiscs: this.state.occupiedDiscs + 1
            });
        }
    }

    render() {
        let discs = [];
        for (let i = 0; i < this.props.rows; i++) {
            let occupied = false;

            if (i > this.props.rows - this.state.occupiedDiscs - 1) {
                occupied = true;
            }
            discs.push(< Disc key = {
                'disc' + i
            }
            occupied = {
                occupied
            } />);
        }
        return ( < div className = 'column' onClick = {
            this.handleClick.bind(this)
        } > {
            discs
        } < /div>
            );
        }
    }

    export default Column;

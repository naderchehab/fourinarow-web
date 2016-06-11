import React, { Component } from 'react';

class Disc extends Component {
    render() {
        let classes = 'circle';
        if (this.props.occupied) {
            classes += ' red';
        }
        return <div className={classes} />;
    }
}

export default Disc;

import React, {Component} from 'react';

class Disc extends Component {
    render() {
        let classes = ['circle'];

        if (this.props.occupied) {
            classes.push('red');
        }

        return <div className={classes.join(' ')}/>;
    }
}

export default Disc;

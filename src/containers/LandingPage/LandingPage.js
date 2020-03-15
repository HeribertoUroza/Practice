import React from 'react';

import { Link } from 'react-router-dom';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 'tetset'
        };
    }


    componentDidMount = () => {
        console.log('test')
    };

    render() {

        return (
            <>

            </>
        )
    }
}

export default Landing;
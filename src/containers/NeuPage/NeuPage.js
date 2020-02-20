import React from 'react';

class NeuPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        //const { test } = this.props.location.state
        //console.log(test)
        console.log(this.props)
    }

    render() {
        return (
            <>
                NeuPage
            </>
        )
    }
}

export default NeuPage;
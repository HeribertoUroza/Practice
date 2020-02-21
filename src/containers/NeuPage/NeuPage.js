import React from 'react';

class NeuPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
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
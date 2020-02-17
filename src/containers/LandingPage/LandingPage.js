import React from 'react';

import { Link } from 'react-router-dom';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <div className='container'>
                    <section>
                        <Link to='/neumorphism' >Neumorphism</Link>
                        {/* INSERT IMAGE TO LINK TO PAGE */}
                    </section>

                    <section>
                        <Link to='/transparency' >Transparency</Link>
                        {/* INSERT IMAGE TO LINK TO PAGE */}
                    </section>

                    <section>
                        <Link to='/twotone'>Two Tone Color</Link>
                        {/* INSERT IMAGE TO LINK TO PAGE */}
                    </section>

                </div>
            </>
        )
    }
}

export default Landing;
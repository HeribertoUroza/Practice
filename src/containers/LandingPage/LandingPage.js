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
                        <Link to='/neumorphism'>
                            <img src='https://cdn.dribbble.com/users/1299148/screenshots/9680920/web_1920___1.png' 
                            alt='neumorphism_image' 
                            className='image'/>
                        </Link>
                        
                        {/* INSERT IMAGE TO LINK TO PAGE */}
                    </section>

                    <section>
                        <Link to='/transparency' >Transparency</Link>
                        <Link to='/transparency' >
                            <img src='https://cdn.freebiesbug.com/wp-content/uploads/2012/12/transparent-ui-kit-free-psd.jpg' 
                            alt='transparency_image' 
                            className='image' />
                        </Link>

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
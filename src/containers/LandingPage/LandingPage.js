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
                <div className='container'>
                    <section>
                        <Link to='/neumorphism'
                            className='title'
                        >Neumorphism</Link>
                        <Link to='/neumorphism'>
                            <img src='https://cdn.dribbble.com/users/1299148/screenshots/9680920/web_1920___1.png' 
                            alt='neumorphism_image' 
                            className='image'/>
                        </Link>
                        
                        {/* INSERT IMAGE TO LINK TO PAGE */}
                    </section>

                    <section>
                        <Link to='/transparency' 
                            className='title'
                        >Transparency</Link>
                        <Link to='/transparency' >
                            <img src='https://cdn.freebiesbug.com/wp-content/uploads/2012/12/transparent-ui-kit-free-psd.jpg' 
                            alt='transparency_image' 
                            className='image' />
                        </Link>

                        {/* INSERT IMAGE TO LINK TO PAGE */}
                    </section>

                    <section>
                        <Link to='/twotone'
                            className='title'>Two Tone Color
                        </Link>
                        
                        <Link to='/twotone'>
                            <img src='https://elements-cover-images-0.imgix.net/39dd919b-3270-4248-b9bd-d98d76f19c4c?auto=compress%2Cformat&fit=max&w=710&s=5fb0ebda277e660a12120b1dda8770d9'
                            alt='twotone_image'
                            className='image' />
                        </Link>
                        {/* INSERT IMAGE TO LINK TO PAGE */}
                    </section>

                </div>
            </>
        )
    }
}

export default Landing;
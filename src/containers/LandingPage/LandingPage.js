import React from 'react';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <div class='container'>
                    <section>
                        Neumorphism
                    </section>

                    <section>
                        Transparency
                    </section>

                    <section>
                        Two Tone Color
                    </section>

                    <section>
                        Illustrations and Cartoons
                    </section>
                </div>
            </>
        )
    }
}

export default Landing;
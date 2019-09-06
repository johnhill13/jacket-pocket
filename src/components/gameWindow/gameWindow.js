import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import posed from 'react-pose';
import Question from '../question/question'
import '../question/question';
import './gameWindow.css';



const Box = posed.div({
    visible: { opacity: 1},
    hidden: { opacity: 0}
}); 



class gameWindow extends Component { 
    state = { isVisible: true };


    componentDidMount() {
        setInterval(() => {
            this.setState(prevState => { return {isVisible: !prevState.isVisible }});
        }, 500);
    }

    render() {
        const { isVisible } = this.state;
        return(
            <>
                <Container>
                    <Segment raised>
                        <Box 
                            className="box"
                            pose={this.state.isVisible ? 'visible' : 'hidden'} 
                            />
                    <Question />
                    </Segment>
                </Container>    
            </>
        );
    }
}

export default gameWindow;








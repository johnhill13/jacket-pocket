import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import posed from 'react-pose';
import Question from '../question/question'
import Answer from '../answer/answer'
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

        return(
            <>
                <Container>
                    <Segment className="questions-container" raised>
                        {/* <Box 
                            className="box"
                            pose={this.state.isVisible ? 'visible' : 'hidden'} 
                            /> */}
                        {/* <Question /> */}
                        <Answer />
                    </Segment>
                </Container>    
            </>
        );
    }
}

export default gameWindow;








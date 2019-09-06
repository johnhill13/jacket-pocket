
import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import posed from 'react-pose';
import '../question/question';
import './playerNames.css';

const Box = posed.div({
    visible: { opacity: 1},
    hidden: { opacity: 0}
}); 

class playerNames extends Component { 
    state = { isVisible: true };

    componentDidMount() {
        setInterval(() => {
            this.setState(prevState => { return {isVisible: !prevState.isVisible }});
        }, 500);
    }

    render() {

        return(
            <>
            <Container Grid>
                <Segment className="questions-container" raised>
                    <Box
                        className="box item"
                        pose={this.state.isVisible ? 'visible' : 'hidden'} 
                    />
                    <Box 
                        className="box item"
                        pose={this.state.isVisible ? 'visible' : 'hidden'} 
                    />
                    <Box 
                        className="box item"
                        pose={this.state.isVisible ? 'visible' : 'hidden'} 
                    />
                    <Box 
                        className="box item"
                        pose={this.state.isVisible ? 'visible' : 'hidden'} 
                    />
                </Segment>
            </Container>
            </>
        );
    }
}

export default playerNames;








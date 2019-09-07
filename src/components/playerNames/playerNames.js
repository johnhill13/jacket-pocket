
import React, { Component } from 'react';
import { Container, Segment, Grid } from 'semantic-ui-react';
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
            <Container>
                <Segment className="questions-container" raised>
                    <Grid>
                        <Grid.Row columns={4}>
                            <Grid.Column>
                                <Box
                                    className="box"
                                    pose={this.state.isVisible ? 'visible' : 'hidden'}>
                                    <h1>player 1</h1>
                                </Box>
                            </Grid.Column>
                            <Grid.Column>
                                <Box
                                    className="box"
                                    pose={this.state.isVisible ? 'visible' : 'hidden'}>
                                    <h1>player 2</h1>
                                </Box>       
                            </Grid.Column>
        
                            <Grid.Column>
                                <Box
                                    className="box"
                                    pose={this.state.isVisible ? 'visible' : 'hidden'}>
                                    <h1>player 3</h1>
                                </Box>       
                            </Grid.Column>
        
                            <Grid.Column>
                                <Box
                                    className="box"
                                    pose={this.state.isVisible ? 'visible' : 'hidden'}>
                                    <h1>player 4</h1>
                                </Box>       
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Container>
            </>
        );
    }
}


export default playerNames;








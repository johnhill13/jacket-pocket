
import React, { Component } from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
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
                    <Grid columns='equal'>
                        <Grid.Row columns={4}>
                            <Grid.Column>
                                <Box
                                    className=""
                                    pose={this.state.isVisible ? 'visible' : 'hidden'}>
                                        <div>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
                                            <span>Player 1</span>
                                        </div>    
                                </Box>
                            </Grid.Column>
                            <Grid.Column>
                                <Box
                                    className=""
                                    pose={this.state.isVisible ? 'visible' : 'hidden'}>
                                        <div>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
                                            <span>Player 2</span>
                                        </div>   
                                </Box>       
                            </Grid.Column>
        
                            <Grid.Column>
                                <Box
                                    className=""
                                    pose={this.state.isVisible ? 'visible' : 'hidden'}>
                                        <div>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
                                            <span>Player 3</span>
                                        </div>   
                                </Box>       
                            </Grid.Column>
        
                            <Grid.Column>
                                <Box
                                    className=""
                                    pose={this.state.isVisible ? 'visible' : 'hidden'}>
                                        <div>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
                                            <span>Player 4</span>
                                        </div>   
                                </Box>       
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </Container>
            </>
        );
    }
}


export default playerNames;








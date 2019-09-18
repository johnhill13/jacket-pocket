
import React, { Component } from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import posed from 'react-pose';
import '../question/question';
import './playerNames.css';
import API_URL from '../constants';
import axios from 'axios';

const Box = posed.div({
    visible: { opacity: 1},
    hidden: { opacity: 0}
}); 

class playerNames extends Component { 
    state = { 
        isVisible: true,
        players: [{}],
        score: null,
    };  


    handleSubmit = event => {
        event.preventDefault();
        const playerInfo = {
            name: this.state.player,
            score: this.state.score,
        }
        axios.post(`${API_URL}/player`, playerInfo)
        .then(res => {
            console.log(res);
        })

    }


    
    componentDidMount() {

        axios.get(`${API_URL}/player`).then(res => {
            console.log(res);
            this.setState({
                players: res.data
            })
        })

        setInterval(() => {
            this.setState(prevState => { return {isVisible: !prevState.isVisible }});
        }, 500);
    }

    render() {

        return(
            <>
            <Container>
                <Grid textAlign='center' columns={4} padded>
                    <Grid.Row>
                        <Grid.Column>
                            <Box
                                className=""
                                pose={this.state.isVisible ? 'visible' : 'hidden'}>
                                <div>
                                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
                                        {/* code goes here to display player names */}
                                        {/* {this.state.persons.map(person => <span>key={person.id}{person.value}</span>)} */}
                                        {/* {this.state.players.map(player => (<h1 key={player.id}>{player.name}</h1>))} */}
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





import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import posed from 'react-pose';
import { API_URL } from '../constants';
import NameInput from '../playerNames/nameInput';
import Question from '../question/question';
import AnswerContainer from '../answer/answerContainer';
import Final from '../finalScore/finalScore';
import './gameWindow.css';
import axios from 'axios';



const Box = posed.div({
    visible: { opacity: 1},
    hidden: { opacity: 0}
}); 



class gameWindow extends Component { 
    state = { 
        isVisible: true,
        game: null,
        player: null,
        response: null
     };


     updateGame = game => {
         this.setState({game})
     }
     updatePlayer = player => {
         this.setState({player})
     }
     updateResponse = response => {
         this.setState({response})
     }

     
    
    componentDidMount() {

        axios.get(`${API_URL}/game`).then(res => {
            console.log(res);
            this.setState({
                game: res.data
            })
        })
    }

    render() {
        const answer = 'This is the answer passed from gameWindow to Answer';
        const question = 'this is a question passed form gameWindow to Answer';
        return(
            <>
                <Container>
                    <Segment className="questions-container" raised>
                        {/* <Box 
                            className="box"
                            pose={this.state.isVisible ? 'visible' : 'hidden'} 
                            /> */}
                        {!this.state.game && <NameInput  updateGame={this.updateGame} updatePlayer={this.updatePlayer}/>}
                        {this.state.game && !this.state.response && <Question updateResponse={this.updateResponse} updateGame={this.updateGame} game={this.state.game} player={this.state.player}/>}
                        {this.state.response && <AnswerContainer game={this.state.game} answer={this.state.response[this.state.response.length - 1]}/>}
                        {/* <Final /> */}
                    </Segment>
                </Container>    
            </>
        );
    }
}

export default gameWindow;








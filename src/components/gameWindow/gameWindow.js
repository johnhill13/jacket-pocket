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

const INITAL_STATE ={
    isVisible: true,
        game: null,
        player: null,
        response: null,
        score: 0
}

class gameWindow extends Component { 
    state = { 
        ...INITAL_STATE
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
     restartGame = () => {
         axios.delete(`${API_URL}/game/${this.state.game._id}`).then((res)=>{
            this.setState({...INITAL_STATE})
         })
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
        return(
            <>
                <Container>
                    <Segment className="questions-container" raised>
                        {!this.state.game && <NameInput  updateGame={this.updateGame} updatePlayer={this.updatePlayer}/>}
                        {this.state.game && !this.state.response && <Question updateResponse={this.updateResponse} updateGame={this.updateGame} game={this.state.game} player={this.state.player}/>}
                        {this.state.response && <AnswerContainer game={this.state.game} player={this.state.player} answer={this.state.response[this.state.response.length - 1]}/>}
                        {this.state.game && this.state.response && this.state.question && <Final restartGame={this.restartGame} game={this.state.game} score={this.state.score} player={this.state.player}/>}
                    </Segment>
                </Container>    
            </>
        );
    }
}

export default gameWindow;








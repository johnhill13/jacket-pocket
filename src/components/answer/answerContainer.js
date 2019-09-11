import React from 'react';
import './answer.css';
import { Label } from 'semantic-ui-react';
import AnswerList from './answerList';
import { thisExpression } from '@babel/types';


class answerContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { 
      isOpen: false,
      player: this.props.player, 
      answers: this.props.game.rounds[0].answers,
      responses: this.props.game.rounds[0].responses,
      score: 0,
    }
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  componentDidMount() {
    setTimeout(this.toggle, 1000);
    this.compareArr()
  }

  compareArr = () =>{
    const match = [];
      for (let index=0; index < this.state.answers.length; index++) {
        for (let i=0; i < this.state.responses.length; i++) {
          console.log(this.state.answers[index], this.state.responses[i].input)
          if (this.state.answers[index] === this.state.responses[i].input) {
            match.push(this.state.answers[index])
            console.log('matched')
            return this.setState(prevState => {
              return {
                score: prevState.score + 1
              }
            })
          }
        }
      } 
  }

  render() {

    
  

    // console.log(this.state.answers.length)

    
    console.log(this.state.answers + ' hello my name is john, this printed here')
    const { isOpen } = this.state;
    
    return (
      <>
      <div>
        <Label circular color='black'> {this.state.player.name} your current score is: {this.state.score} </Label>
      </div>
        <Label color='gray' horizontal> Correct answer is:</Label>
        <AnswerList answers={this.state.answers} responses={this.state.responses} player={this.state.player} isOpen={this.state.isOpen}/>
      </>
    );
  }

}

export default answerContainer;



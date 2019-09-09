import React from 'react';
import posed from 'react-pose';

import './answer.css';
import AnswerList from './answerList';
import AnswersData from './answersData';


const Sidebar = posed.ul({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: '-140%', delay: 300 }
});

const Item = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

class answerContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { 
      isOpen: false, 
      answers: AnswersData,
      responses: '',
    }
  }

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  // handleSelect(id){
  //   this.setState{prevState => {
  //     const answer = prevState.answers.map(answer => {

  //     }) 
  //     }
  //   }
  // }


  render() {
    const { isOpen } = this.state;
    
    return (
        <AnswerList answers={this.state.answers} responses={this.state.responses} isOpen={this.state.isOpen}/>
    );
  }

}

export default answerContainer;



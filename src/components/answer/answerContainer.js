import React from 'react';
import posed from 'react-pose';
import axios from 'axios';
import { API_URL } from '../constants';
import './answer.css';
import AnswerList from './answerList';
import AnswersData from './answersData';

class answerContainer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { 
      isOpen: false, 
      answers: [{}],
      responses: '',
    }
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  componentDidMount() {
    setTimeout(this.toggle, 1000);

    axios.post(`${API_URL}/round/:round_id`).then(res => {
        console.log(res);
        this.setState({
          answers: res.data.data.answers
        })
    })
  }


  render() {
    const { isOpen } = this.state;
    
    return (
        <AnswerList answers={this.state.answers} responses={this.state.responses} isOpen={this.state.isOpen}/>
    );
  }

}

export default answerContainer;



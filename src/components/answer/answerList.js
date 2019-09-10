import React from 'react';
import posed from 'react-pose';

import './answer.css';
import Answer from './answer';

const Sidebar = posed.ul({
    open: {
      x: '0%',
      delayChildren: 200,
      staggerChildren: 50
    },
    closed: { x: '-140%', delay: 300 }
  });
  

class answerList extends React.PureComponent {

  // handleSelect(id){
  //   this.setState{prevState => {
  //     const answer = prevState.answers.map(answer => {

  //     }) 
  //     }
  //   }
  // }


  render() {
    const { isOpen } = this.props;
    
    const answerMap = this.props.answers.map(answer => <Answer key={answerList.id} value={answer}/>)

    return (
      <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
          {answerMap}
      </Sidebar>
    );
  }

}

export default answerList;



import React from 'react';
import posed from 'react-pose';
import { Button } from 'semantic-ui-react';

import './finalScore.css';

const Sidebar = posed.ul({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: '-140%', delay: 300 }
});

class score extends React.PureComponent {
  state = { 
    isOpen: false,
    name: 'currently test name through state',
    score: 'currently test score through state',
  };

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  handleClick = () => {
    console.log('clicked');
    this.props.restartGame();
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;

    return (
      <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
        {/* <Item className="item" >
            {this.state.name} : {this.state.score}
        </Item> */}
        <Button type='submit' onClick={this.handleClick.bind(this)}>Restart</Button>
      </Sidebar>
    );
  }
}

export default score;
import React from 'react';
import posed from 'react-pose';
import './finalScore.css';

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

class score extends React.PureComponent {
  state = { 
    isOpen: false,
    name: 'currently test name through state',
    score: 'currently test score through state',
  };

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;

    return (
      <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
        <Item className="item" >
            {this.state.name} : {this.state.score}
        </Item>
        <Item className="item" >
        {this.state.name} : {this.state.score}
        </Item>
        <Item className="item" >
        {this.state.name} : {this.state.score}
        </Item>
        <Item className="item" >
        {this.state.name} : {this.state.score}
        </Item>
      </Sidebar>
    );
  }
}

export default score;
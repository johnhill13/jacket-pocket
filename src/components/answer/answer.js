import React from 'react';
import posed from 'react-pose';
import './answer.css';

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

class answer extends React.PureComponent {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;

    return (
      <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
        <Item className="item" >
          {this.props.answer}
        </Item>
        <Item className="item" >
          {this.props.answer}
        </Item>
        <Item className="item" >
          {this.props.answer}
        </Item>
        <Item className="item" >
          {this.props.answer}
        </Item>
        <Item className="item" >
          {this.props.answer}
        </Item>
        <Item className="item" >
          {this.props.answer}
        </Item>
        <Item className="item" >
          {this.props.answer}
        </Item>
        <Item className="item" >
          {this.props.answer}
        </Item>
      </Sidebar>
    );
  }

}

export default answer;

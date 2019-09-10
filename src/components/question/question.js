import React from 'react';
import axios from 'axios';
import { API_URL } from '../constants';
import posed from 'react-pose';
import { Form, Button } from 'semantic-ui-react';
import './question.css';

const Sidebar = posed.ul({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: '-100%', delay: 300 }
});

const Item = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

class Question extends React.PureComponent {
  constructor() {
    super()
    this.state = { 
      isOpen: false,
      question: 'test question through state',
      value: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }   

  
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  handleChange(event) {
    // unverifed need for event.prevetefault();  
    event.preventDefault();
    this.setState({
      value: event.target.value
    })
    // console.log(this.state); 
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.put(`${API_URL}/:round_id`, this.state.value).then(res => {
      console.log(res.data)
      const answers = res.data.data;
      this.setState({
        value: event.target.value
      })
      // send to another page displaying answers
      // this.props.history.push('/')
      console.log(res.data)
    })
    console.log(this.state)
  }


  render() {
    const { isOpen } = this.state;

    return (
      <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
        <Item className="item" >
          {this.state.question}
        </Item>
        <Form type='text' onSubmit={this.handleSubmit}>
          {/* is it possible to make form text area wram input etc. */}
          {/* <Form.TextArea input type='input' focus placeholder='Type answer here'> */}
            <input type="text" placeholder='Type answer here' onChange={this.handleChange}  />
          {/* </Form.TextArea> */}
          <Button value='Submit' color='yellow' content='Submit Answer'/>
        </Form>        
      </Sidebar>
    );
  }
}

export default Question;

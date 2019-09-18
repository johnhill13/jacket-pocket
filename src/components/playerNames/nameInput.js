import React from 'react';
import axios from 'axios';
import API_URL from '../constants';
import posed from 'react-pose';
import { Form, Button } from 'semantic-ui-react';

const Sidebar = posed.ul({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: ' -100%', delay: 300 }
});

const Item = posed.li({
  open: { y: 0, opacity: 1 },
  closed: {  y: 20, opacity: 0 }
});

class nameInput extends React.PureComponent {
  constructor() {
    super()
    this.state = { 
        player: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }   

  
  componentDidMount() {
    

    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  handleChange(event) {
    event.preventDefault();
    this.setState({
      name: event.target.value
    })
    // console.log(this.state); 
  }

  handleSubmit(event) {
    event.preventDefault();
    let playerData = {name:this.state.name, score: 0}
    axios.post(`${API_URL}/player`, playerData).then(res => {
      console.log(res.data.data._id)
      this.props.updatePlayer(res.data.data);
      axios.post(`${API_URL}/game`, {player: res.data.data._id}).then(res => {
        console.log(res.data.data)
        this.props.updateGame(res.data.data);
})

      // send to another page after creating game
      // this.props.history.push('/')

      console.log(this.state)
    })
  }


  render() {
    const { isOpen } = this.state;

    return (
        <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
        <Form method='POST' onSubmit={this.handleSubmit}>
          {/* is it possible to make form text area wram input etc. */}
          {/* <Form.TextArea input type='input' focus placeholder='Type answer here'> */}
            <input type="text" name="name" placeholder='Type player name' onChange={this.handleChange}  />
          {/* </Form.TextArea> */}
          <Button value='Submit' type="submit" color='yellow' content='Submit Name'/>
        </Form>        
      </Sidebar>
    );
  }
}

export default nameInput;

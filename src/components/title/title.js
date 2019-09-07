import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import './title.css';

const title = () => {
    return (

        <Container>
            <Header as='h1' textAlign='center justified' color='yellow' className="jacket-pocket" >Jacket Pocket</Header>
        </Container>

    );
  }

export default title;

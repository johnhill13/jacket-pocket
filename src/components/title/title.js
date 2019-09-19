import React from 'react';
import SplitText from 'react-pose-text';
import { Container, Header } from 'semantic-ui-react';
import './title.css';

const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 30
    }
  };

const title = () => {
    return (

        <Container>
            <Header as='h1' textAlign='center' className="jacket-pocket" >
                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                    Jacket Pocket
                </SplitText>
            </Header>
            <Header as='h4' textAlign='center' className="jacket-pocket" color='grey'>
                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                    By John
                </SplitText>
            </Header>
            
        </Container>

    );
  }

export default title;


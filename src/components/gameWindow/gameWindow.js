import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import posed from 'react-pose';

import './gameWindow.css';



const Box = posed.div({
    visible: { opacity: 1},
    hidden: { opacity: 0}
}); 



class gameWindow extends Component { 
    state = { isVisible: true };


    componentDidMount() {
        setInterval(() => {
            this.setState(prevState => { return {isVisible: !prevState.isVisible }});
        }, 500);
    }

    render() {
        const { isVisible } = this.state;
        return(
            <>
                <Container>
                    <Segment raised>
                        <Box 
                            className="box"
                            pose={this.state.isVisible ? 'visible' : 'hidden'} 
                            />
                    </Segment>
                </Container>    
            </>
        );
    }
}

export default gameWindow;







// const ContainerExampleContainer = () => (
//   <Container>
//     <p>
    //   Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    //   ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
    //   magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
    //   ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
    //   quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
    //   arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
    //   Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
    //   dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
    //   Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
    //   Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
    //   viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
    //   Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
//     </p>
//   </Container>
// )

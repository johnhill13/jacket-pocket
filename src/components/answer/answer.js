import React from "react"
import posed from 'react-pose';

const Item = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});


function answer(props) {
    return (
      <Item className="item">
            <p>{props.value}</p>

      </Item>
    )
}

export default answer;


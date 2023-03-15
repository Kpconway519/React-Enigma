import React, { Component } from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

class KeyboardComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.typeChars = this.props.typeChars.bind(this);
}

    onChange = (input) => {
        console.log("Input changed", input);
      }
    
      onKeyPress = (button) => {
        console.log("Button pressed", button);
      }
    
      render(){
        return (
          <Keyboard
            onChange={this.onChange}
            onKeyPress={this.props.typeChars}
          />
        );
      }
}

export default KeyboardComponent
import React, { Component } from "react";
import UserInput from "../UserInput/UserInput"
import Output from "../Output/Output"

class Enigma extends Component {

    constructor(props) {
        super(props)
        this.state = {
            output: ""
        }
    }
    
    acceptInput = (event) => {
        this.setState({
            output: event
        })
    }

    render() {

        return(
            
            <div>
            <UserInput
            onChange={this.acceptInput}/>
            <Output 
            output={this.state.output}
            />
            </div>
        
        )
    }
} 

export default Enigma
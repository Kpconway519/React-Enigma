import React, { Component } from "react";
import Keyboard from "./keyboard"
import Output from "./output"
import Plugboard from "./plugboard"
import Rotors from "./rotors"

class Enigma extends Component {

    constructor(props) {
        super(props)
        this.state = {
            output: ""
        }
    }


    render() {

        return (
            <div>
                <Rotors />
                <Keyboard />
                <Plugboard />
                <Output />
            </div>

        )
    }
}

export default Enigma
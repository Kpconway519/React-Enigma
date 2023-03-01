import React, { Component } from "react";

class Rotors extends Component {

    constructor(props) {
        super(props)
        this.state = {
            output: ""
        }
    }


    render() {

        return (
        <div className={"rotorsContainer"}>
            <div className={"rotor rotor1"}>rotor1</div>
            <div className={"rotor rotor2"}>rotor2</div>
            <div className={"rotor rotor3"}>rotor3</div>
        </div>
    )
    }
}

export default Rotors


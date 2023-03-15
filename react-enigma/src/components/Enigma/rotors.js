import React, { Component } from "react";


class Rotors extends Component {

    constructor(props) {
        super(props)
        this.state = {
            output: ""
        }
        this.setRotors = this.props.setRotors.bind(this);
    }


    render() {

        return (
        <div className={"rotorsContainer"}>
            <div className={"rotor rotor1"}>
                rotor1
            <select></select>    
            </div>
            <div className={"rotor rotor2"}>
                rotor2
                <select></select>    
            </div>
            <div className={"rotor rotor3"}>
                rotor3
                <select></select>    
            </div>
        </div>
    )
    }
}

export default Rotors


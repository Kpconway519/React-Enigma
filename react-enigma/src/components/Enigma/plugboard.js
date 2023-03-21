import React, { Component } from "react";

class Plugboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            output: ""
        }
    }

    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    populateAlphabet = this.alphabet.split("").map((letter, index) => <option key={index} value={letter}>{letter}</option>)

    render() {

        return (
            <div>
                <label>
                    First Letter
                </label>
                <select>
                    {this.populateAlphabet}
                </select>
                <label>
                    Second Letter
                </label>
                <select>
                    {this.populateAlphabet}

                </select>
                <button name={"addPlugboardSet"}>+</button>
            </div>
        )
    }
}

export default Plugboard
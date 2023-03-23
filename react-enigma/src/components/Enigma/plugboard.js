import React, { Component } from "react";

class Plugboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            output: "",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            firstLetter: "A",
            firstLetterUpdated: true,
            secondLetter: "B",
            secondLetterUpdated: true
        }
        this.updatePlugs = this.props.updatePlugs.bind(this)
        this.updateLetter = this.updateLetter.bind(this)
        this.updatePlugboard = this.updatePlugboard.bind(this)
        this.populateAlphabet = this.populateAlphabet.bind(this)
    }

    
    populateAlphabet = (alphabet) => (alphabet.split("").map((letter, index) => <option key={index} value={letter}>{letter}</option>));


    updatePlugboard = () => {
        // take some array of char pairs and set to state
        let removedChars = this.state.firstLetterUpdated ? this.state.alphabet.replace(this.state.firstLetter, "") : this.state.alphabet.replace(this.state.alphabet[0], "");
        removedChars = this.state.secondLetterUpdated ? this.state.alphabet.replace(this.state.secondLetter, "") : this.state.alphabet.replace(this.state.alphabet[1], "");
        console.log(removedChars)
        this.setState({alphabet: removedChars})
        const plugsArr = [this.state.firstLetter, this.state.secondLetter]
        // reset selected letters
        console.log(this.state.firstLetter)
        console.log(this.state.alphabet[0])
        console.log(this.state.secondLetter)
        console.log(this.state.alphabet[1])
        this.setState({firstLetter: this.state.alphabet[0]})
        this.setState({secondLetter: this.state.alphabet[1]})
        
        // update state
        this.updatePlugs(plugsArr)
        // add a new row of plugboard pairs

    }

    updateLetter = (num, val) => {
        
        if (num === "1") {
            this.setState({firstLetterUpdated: true});
            return this.setState({firstLetter: val.toUpperCase()})
        };
        if (num === "2") {
            this.setState({secondLetterUpdated: true});
            return this.setState({secondLetter: val.toUpperCase()})
        };
        return console.log('not so fast there buster')
    }


    render() {

        return (
            <div>
                <h3>Current Plug Settings:</h3>
                <ul>
                    {this.props.plugSettings.map((setting, index) => <li key={index}> {setting} </li>)}
                </ul>
                {console.log(this.state.alphabet)}
                <label>
                    First Letter
                </label>
                <select value={this.state.firstLetter} onChange={e => this.updateLetter("1", e.target.value)}>
                    {this.populateAlphabet(this.state.alphabet)}
                </select>
                <label>
                    Second Letter
                </label>
                <select value={this.state.secondLetter} onChange={e => this.updateLetter("2", e.target.value)}>
                    {this.populateAlphabet(this.state.alphabet)}

                </select>
                <button onClick={this.updatePlugboard} name={"addPlugboardSet"}>+</button>
            </div>
        )
    }
}

export default Plugboard
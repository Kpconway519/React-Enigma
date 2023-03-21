import React, { Component } from "react";
import Keyboard from "./keyboard"
import Output from "./output"
import Plugboard from "./plugboard"
import Rotors from "./rotors"
import rotorConfig from "./rotorConfig";
import { processRotors, composeRotors } from "./coreLogic";

class Enigma extends Component {

    constructor(props) {
        super(props)
        this.state = {
            output: "",
            characters: "",
            rotorSettings: (composeRotors(rotorConfig[3], rotorConfig[2], rotorConfig[1], rotorConfig.reflector))
        }

        this.rotorConfig = rotorConfig;
        // let rotorsConfigTest = composeRotors(this.rotorConfig[3], this.rotorConfig[2], this.rotorConfig[1], this.rotorConfig.reflector);

        this.typeChars = async (char) => {
            console.log("typechars called, char is: ", char, "this.state.characters is: ", this.state.characters)
            const enigmaChar = processRotors(char.toUpperCase(), this.state.rotorSettings);
            this.setState({characters: (this.state.characters + await enigmaChar)})
        };

        this.handleCharacters = () => this.state.characters;

        this.selectRotors = (rotor1, rotor2, rotor3, reflector) => this.setState({rotorSettings: composeRotors(rotor1, rotor2, rotor3, reflector)})
    }
    

    render() {
        return (
            <div>
                <button onClick={() => console.log(this.state.rotorSettings)}>click me</button>
                <Rotors setRotors={this.selectRotors} defaultRotorConfig={this.state.rotorSettings}/>
                <Keyboard typeChars={this.typeChars}/>
                <Plugboard />
                <Output characters={this.state.characters} />
            </div>

        )
    }
}

export default Enigma
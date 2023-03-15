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
            characters: ""
        }

        this.rotorConfig = rotorConfig;

        this.typeChars = async (char) => {
            console.log("typechars called, char is: ", char, "this.state.characters is: ", this.state.characters)
            let rotorsConfigTest = composeRotors(this.rotorConfig[1], this.rotorConfig[2], this.rotorConfig[3], this.rotorConfig.reflector);
            const enigmaChar = processRotors(char, rotorsConfigTest);
            this.setState({characters: (this.state.characters + await enigmaChar)})
        };

        this.handleCharacters = () => this.state.characters;

        // const rotorsConfigTest = composeRotors(rotors[1], rotors[2], rotors[3], rotors.reflector);
        // processRotors("Y", rotorsConfigTest)
    }




    render() {

        return (
            <div>
                <Rotors />
                <Keyboard typeChars={this.typeChars}/>
                <Plugboard />
                <Output characters={this.state.characters} />
            </div>

        )
    }
}

export default Enigma
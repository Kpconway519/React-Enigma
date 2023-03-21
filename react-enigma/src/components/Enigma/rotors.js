import React, { Component, useState } from "react";
import rotorConfig from "./rotorConfig";


class Rotors extends Component {

    constructor(props) {
        super(props)
        this.state = {
            output: ""
        }
        this.setRotors = this.props.setRotors.bind(this);
        this.rotorsConfig = this.props.defaultRotorConfig.rotorsConfig;
    }
    
    // rotorsConfig = this.defaultRotorConfig.rotorsConfig;

    rotorWheels = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII"
    ];

    countArr = () => {
        const numbers = [];
        for (let i = 1; i < 27; i++) {
            numbers.push(i);
        }
        return numbers;
    }

    populateNumbers = () => this.countArr().map((num, index )=> <option key={index} value={num}>{num}</option>);

    populateRotors = () => this.rotorWheels.map((wheel, index) => <option key={index} value={wheel}>{wheel}</option>);

    setSelectedRotor = (rotor, value) => console.log(rotor, value, "rotor, value")

    
    
    render() {
        // const [selectedRotor, setSelectedRotor ] = useState('I');

        return (
            <div className={"rotorsContainer"}>
                {console.log(this.rotorsConfig, "defaultrotorconfig")}
                <div className={"rotor rotor1"}>
                    <h3>Rotor 1</h3>
                    <label>Rotor Number</label>
                    <select value={"pizza"} onChange={e => this.setSelectedRotor(1, e.target.value)}>
                        {this.populateRotors()}
                    </select>
                    <label>Ring Setting</label>
                    <select>
                        {this.populateNumbers()}
                    </select>
                    <label>Rotor Position</label>
                    <select>
                        {this.populateNumbers()}
                    </select>
                </div>
                <div className={"rotor rotor2"}>
                    <h3>Rotor 2</h3>
                    <label>Rotor Number</label>
                    <select defaultValue="II">
                        {this.populateRotors()}
                    </select>
                    <label>Ring Setting</label>
                    <select>
                        {this.populateNumbers()}
                    </select>
                    <label>Rotor Position</label>
                    <select>
                        {this.populateNumbers()}
                    </select>
                </div>
                <div className={"rotor rotor3"}>
                    <h3>Rotor 3</h3>
                    <label>Rotor Number</label>
                    <select defaultValue="III">
                        {this.populateRotors()}
                    </select>
                    <label>Ring Setting</label>
                    <select>
                        {this.populateNumbers()}
                    </select>
                    <label>Rotor Position</label>
                    <select>
                        {this.populateNumbers()}
                    </select>
                </div>
            </div>
        )
    }
}

export default Rotors


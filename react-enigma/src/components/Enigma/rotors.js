import React, { Component, useState } from "react";
import rotorConfig from "./rotorConfig";


class Rotors extends Component {

    constructor(props) {
        super(props)
        this.state = {
            output: ""
        }
        this.setRotors = this.props.setRotors.bind(this);
    }

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

    populateNumbers = () => this.countArr().map((num, index) => <option key={index} value={num}>{num}</option>);

    populateRotors = () => this.rotorWheels.map((wheel, index) => <option key={index} value={wheel}>{wheel}</option>);

    romanNumToNumber = (numeral) => {
        if (numeral === "I") return 1;
        if (numeral === "II") return 2;
        if (numeral === "III") return 3;
        if (numeral === "IV") return 4;
        if (numeral === "V") return 5;
        if (numeral === "VI") return 6;
        if (numeral === "VII") return 7;
        if (numeral === "VIII") return 8;
        return false;
    }

    setSelectedValue = (rotor, setting, value) => {
        const reflector = this.props.defaultRotorConfig.reflector;
        const newConfig = Array.from(this.props.defaultRotorConfig.rotorsConfig);
        // pull the 
        if (setting === "rotor") {
            const getRotor = rotorConfig[(this.romanNumToNumber(value))]
            newConfig[rotor] = getRotor;
            return this.setRotors(...newConfig, reflector)
        } 
        if (setting === "ring") {
            newConfig[rotor].ringSetting = value;
            return this.setRotors(...newConfig, reflector)
        } 
        if (setting === "position") {
            newConfig[rotor].position = value;
            return this.setRotors(...newConfig, reflector)
        } 
    }


    render() {
        // const [selectedRotor, setSelectedRotor ] = useState('I');

        return (
            // TODO pull from rotorConfig, and Object.assign position and ringSetting
            <div className={"rotorsContainer"}>
                {/* {console.log([...this.props.defaultRotorConfig.rotorsConfig], "defaultrotorconfig")} */}
                {/* <button onClick={() => this.setRotors(rotorConfig[2], rotorConfig[3], rotorConfig[4], rotorConfig.reflector)}>Set Rotors</button>
                <button onClick={() => console.log(this.props.rotorSettings, this.props.rotorSettings.rotorsConfig[0].name)}>Check Updated Settings</button> */}
                {
                    this.props.defaultRotorConfig.rotorsConfig.map((rotor, index) => {
                        const classNames = `rotor rotor${index}`;
                        const humanNum = index + 1;
                        return (
                            <div key={index} className={classNames}>
                                <h3>Rotor {humanNum}</h3>
                                <label>Rotor Number</label>
                                <select value={this.props.rotorSettings.rotorsConfig[index].name} onChange={e => this.setSelectedValue(index, "rotor" , e.target.value)}>
                                    {this.populateRotors()}
                                </select>
                                <label>Ring Setting</label>
                                <select value={this.props.rotorSettings.rotorsConfig[index].ringSetting} onChange={e => this.setSelectedValue(index, "ring" , e.target.value)}>
                                    {this.populateNumbers()}
                                </select>
                                <label>Rotor Position</label>
                                <select value={this.props.rotorSettings.rotorsConfig[index].position} onChange={e => this.setSelectedValue(index, "position" , e.target.value)}>
                                    {this.populateNumbers()}
                                </select>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export default Rotors


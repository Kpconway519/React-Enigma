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
        this.rotorSettings = this.props.rotorSettings;
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

    populateNumbers = () => this.countArr().map((num, index) => <option key={index} value={num}>{num}</option>);

    populateRotors = () => this.rotorWheels.map((wheel, index) => <option key={index} value={wheel}>{wheel}</option>);

    setSelectedRotor = (rotor, value) => console.log(rotor, value, "rotor, value")



    render() {
        // const [selectedRotor, setSelectedRotor ] = useState('I');

        return (
            // TODO pull from rotorConfig, and Object.assign position and ringSetting
            <div className={"rotorsContainer"}>
                {console.log(this.rotorsConfig, "defaultrotorconfig")}
                <button onClick={() => this.setRotors(rotorConfig[2], rotorConfig[3], rotorConfig[4], rotorConfig.reflector)}>Set Rotors</button>
                <button onClick={() => console.log(this.props.rotorSettings)}>Check Updated Settings</button>
                {
                    this.rotorsConfig.map((rotor, index) => {
                        const classNames = `rotor rotor${index}`;
                        const humanNum = index + 1;
                        return (
                            <div key={index} className={classNames}>
                                <h3>Rotor {humanNum}</h3>
                                <label>Rotor Number</label>
                                <select defaultValue={rotor.name} onChange={e => this.setSelectedRotor(humanNum, e.target.value)}>
                                    {this.populateRotors()}
                                </select>
                                <label>Ring Setting</label>
                                <select defaultValue={rotor.ringSetting}>
                                    {this.populateNumbers()}
                                </select>
                                <label>Rotor Position</label>
                                <select defaultValue={rotor.position}>
                                {/* <select defaultValue={rotor.position} value={this.props.rotorSettings[2].position} onChange={e => this.setSelectedValue(index, "position", e.target.value)}> */}
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


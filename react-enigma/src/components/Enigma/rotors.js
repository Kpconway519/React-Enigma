import React, { Component } from "react";


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

    populateNumbers = () => this.countArr().map((num, index )=> <option key={index} value={num}>{num}</option>);

    populateRotors = () => this.rotorWheels.map((wheel, index) => <option key={index} value={wheel}>{wheel}</option>)


    render() {

        return (
            <div className={"rotorsContainer"}>
                <div className={"rotor rotor1"}>
                    <h3>Rotor 1</h3>
                    <label>Rotor Number</label>
                    <select>
                        {this.populateRotors()}
                    </select>
                    <label>Ring Setting</label>
                    <select>
                        {this.populateNumbers()}
                    </select>
                    <label>Rotor Offset</label>
                    <select>
                        {this.populateNumbers()}
                    </select>
                </div>
                <div className={"rotor rotor2"}>
                    <h3>Rotor 2</h3>
                    <label>Rotor Number</label>
                    <select>
                        {this.populateRotors()}
                    </select>
                    <label>Ring Setting</label>
                    <select>
                        {this.populateNumbers()}
                    </select>
                    <label>Rotor Offset</label>
                    <select>
                        {this.populateNumbers()}
                    </select>
                </div>
                <div className={"rotor rotor3"}>
                    <h3>Rotor 3</h3>
                    <label>Rotor Number</label>
                    <select>
                        {this.populateRotors()}
                    </select>
                    <label>Ring Setting</label>
                    <select>
                        {this.populateNumbers()}
                    </select>
                    <label>Rotor Offset</label>
                    <select>
                        {this.populateNumbers()}
                    </select>
                </div>
            </div>
        )
    }
}

export default Rotors


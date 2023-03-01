import React, { Component } from "react";

class Plugboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            output: ""
        }
    }


    render() {

        return (
            <div>
                <label>
                    First Letter
                </label>
                <select>
                    <option value="a">A</option>
                    <option value="b">B</option>
                </select>
                <label>
                    Second Letter
                </label>
                <select>
                    <option value="a">C</option>
                    <option value="b">D</option>
                </select>
                <button name={"addPlugboardSet"}>+</button>
            </div>
        )
    }
}

export default Plugboard
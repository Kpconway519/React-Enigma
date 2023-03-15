import React, { Component } from "react";

class Output extends Component {

    constructor(props) {
        super(props)
        this.state = {
            output: ""
        }
        this.updateText = () => {
            console.log("updateText called", this.props.characters)
            return (this.props.characters)
        }
    }


    render() {

        return (
            <div>
            {(console.log(this.props))}
            <textarea onChange={this.updateText} defaultValue={this.props.characters}/>
        </div>

        )
    }
}

export default Output




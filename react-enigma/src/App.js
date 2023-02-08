import React, { Component } from 'react';
import './App.css';
import Enigma from "./components/Enigma/Enigma"


// shenanigans
// const bananas = (animal) => {
//   if (animal === "monkey") return <h1>I love Monkeys!</h1>
//   return <h1>Stop! Monkeys Only!</h1>
// };

// class Clock extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       time: new Date()
//     };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     )
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       time: new Date()
//     })
//   }

//   render() {
//     return (
//     <h1>Current Time: {this.state.time.toLocaleTimeString()}</h1>
//     );
//   }
// }
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends Component {
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick}/>;
    }


    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
        Coming soon: Enigma
        {/* <Clock/> */}
        <LoginControl/>
        <Enigma></Enigma>

    </div>
  );
}

export default App;

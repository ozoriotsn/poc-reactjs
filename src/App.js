import React, { Component } from "react";
class App extends Component {
  state = {
    loggedIn: false,
  };

  render() {


    return (
      <div className='container'>
       <div className='row'>

<div className='col-lg-12 text-center'>
  
  <br></br>
  <a className='btn btn-primary' href='/login'>Entrar</a></div>

       </div>
      </div>
    );
  }
}

export default App;

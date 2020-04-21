import React, {Component} from 'react';
// import Form from './Components/form'
import 'bootstrap/dist/css/bootstrap.css'
// import UncontrolledForm from './Components/uncontrolledForm'
// import ControlledForm from './Components/controlledForm'
import SplitForm from './Components/splitForm/splitForm'

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Form></Form> */}
        {/* <UncontrolledForm></UncontrolledForm> */}
        {/* <ControlledForm></ControlledForm> */}
        <SplitForm></SplitForm>
      </div>
    );
  }
}

export default App;

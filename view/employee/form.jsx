import React from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class EmployeeRegForm extends React.Component{
    constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {};
     
  }
 handleSubmit(event, errors, values) {
    this.setState({errors, values});
  }

  shouldComponentUpdate() {
    alert("componentDidMount");
  }
 render(){
    return(
        <div class="container" style={{"width":"30%"}}>
            <AvForm onSubmit={this.handleSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
            <AvField id="firstName" name="firstName" label="First Name" 
               validate={{
            required: {value: true, errorMessage: 'Please enter first Name'},
            pattern: {value: '^[A-Za-z]+$', errorMessage: 'Your name must be composed only with letter'}
            }} />
            <AvField name="lastName" id="lastName" label="Last Name"    validate={{
            required: {value: true, errorMessage: 'Please enter last Name'},
            pattern: {value: '^[A-Za-z]+$', errorMessage: 'Your name must be composed only with letter'}
           
          }} />
                
            <AvField name="email" id="email" label="Email" type="email"  required/>
             <FormGroup>
            <Button>Submit</Button>
          </FormGroup>
            </AvForm>
          {this.state.values && <div>
          <h5>Submission values</h5>
          Invalid: {this.state.errors.join(', ')}<br />
          Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
        </div>}
            </div>
    )
 }
}
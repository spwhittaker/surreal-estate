import React from 'react';
import '../Styles/AddProperty.css';
//import { getConsoleOutput } from '@jest/console';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fields: {title:'',
type: 'Flat',
city: 'Manchester'},};};
        
   
    

  render(){return (
      <div className="AddProperty">
        Add Property Page
        <form onSubmit={this.handleAddProperty}>
        <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange}/>
          <br/>Type of property:<select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
              <option value="Flat" label="Flat"/>
              <option value="Detached" label="Detached"/>
              <option value="Semi-Detached" label="Semi-Detached"/>
              <option value="Terraced" label="Terraced"/>
              <option value="End of Terrace" label="End of Terrace"/>
              <option value="Cottage" label="Cottage"/>
              <option value="Bungalow" label="Bungalow"/>
          </select>
          <br />City:<select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
              <option value="Manchester" label="Manchester"/>
              <option value="Leeds" label="Leeds"/>
              <option value="Sheffield" label="Sheffield"/>
              <option value="Liverpool" label="Liverpool"/>
          </select>
          <br/><button type="submit" label="Add">Add</button>
        </form>
      </div>
    );
  }
  handleAddProperty = event => {
    event.preventDefault();
console.log(this.state.fields);
  };
  handleFieldChange = event => {
      this.setState({fields: {
          ...this.state.fields,
          [event.target.name]: event.target.value,
      }})
  }
};

export default AddProperty;

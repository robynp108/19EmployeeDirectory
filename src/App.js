import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import employees from "./employees.json";
import EmployeeCard from "./components/EmployeeCard";

class App extends Component {
  state = {
    employees: employees,
    sortbyname: {},
    filterbydept: {}
  };

  handleInputChange = event => {

  };

  handleFormSubmit = event => {
    event.preventDefault();
    
  };

  render() {
    return (
      <div className="container">
        <h2>Employee Directory</h2>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Title</th>
                <th scope="col">Department</th>
              </tr>
            </thead>
            {this.state.employees.map(employee => (
              <EmployeeCard
                name={employee.name}
                title={employee.title}
                department={employee.department}
              />
            ))}
          </table>
        </div>
        {/* <form classNameName="form">
          <input
            // value={this.state.firstName}
            name="filter"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Filter by name"
          />
          <br></br>
          <input
            // value={this.state.lastName}
            name="sort"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Sort by department"
          />
          <br></br>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form> */}
        <div className="input-group">
            <select className="custom-select" id="inputGroupSelect04">
              <option selected>Options...</option>
              <option value="1">Sort alphabetically by name</option>
              <option value="2">Filter by department</option>
            </select>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">Submit</button>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

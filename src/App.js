import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import employees from "./employees.json";
import EmployeeCard from "./components/EmployeeCard";

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
      <div>
        <h2>Employee Directory</h2>
        <div>
          <table>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Department</th>
            </tr>
            {this.state.employees.map(employee => (
              <EmployeeCard
                name={employee.name}
                title={employee.title}
                department={employee.department}
              />
            ))}
          </table>
        </div>
        <form className="form">
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
            placeholder="Sort by category"
          />
          <br></br>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;

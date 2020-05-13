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
      </div>
    );
  }
}

export default App;

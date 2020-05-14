import React, { Component } from 'react';
import employees from "./employees.json";
import EmployeeCard from "./components/EmployeeCard";

function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

class App extends Component {
  state = {
    employees: employees,
    userChoice: "0"
  };

  handleInputChange = event => {
    this.setState({ userChoice: event.target.value }, () => console.log(this.state));
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();

  // };

  render() {
    let employeeList = this.state.employees;
    if (this.state.userChoice === "1") {
      employeeList = employeeList.sort(compare);
    } else if (this.state.userChoice === "2") {
      employeeList = employeeList.filter(employee => employee.department === "Engineering");
    } else {
      employeeList = this.state.employees;
    }
    
    
    console.log(employeeList);

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
            <tbody>
              {employeeList.map(employee => (
                <EmployeeCard
                  name={employee.name}
                  title={employee.title}
                  department={employee.department}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="input-group">
          <select className="custom-select" id="inputGroupSelect04" onChange={this.handleInputChange}>
            <option value="0" selected>Options...</option>
            <option value="1">Sort alphabetically by name</option>
            <option value="2">Filter by engineers</option>
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

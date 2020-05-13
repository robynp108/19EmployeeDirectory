import React from "react";

function EmployeeCard(props) {
    return (
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.title}</td>
                <td>{props.department}</td>
            </tr>
        </tbody>
    )
}

export default EmployeeCard;
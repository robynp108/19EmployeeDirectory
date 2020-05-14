import React from "react";

function EmployeeCard(props) {
    return (
            <tr>
                <td>{props.name}</td>
                <td>{props.title}</td>
                <td>{props.department}</td>
            </tr>
    )
}

export default EmployeeCard;
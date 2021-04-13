import React from 'react';

const Modal = (props) => {  
  return (
    <div>
      {props.show}
      <div align="left">Employee ID: {props.emp.ID}</div>
      <div align="left">Employee Name: {props.emp.Name}</div>
      <div align="left">Phone Number: {props.emp.phoneNumber}</div>
      <div align="left">Email ID: {props.emp.emailId}</div>
      <div align="left">Department ID: {props.emp.deptId}</div>
      <div align="left">Department Name: {props.emp.deptName}</div>
      <div align="left">Cost Center: {props.emp.costCenter}</div>
      <button onClick={e => {
          props.onClick(false)
      }}
      >
        Close
      </button>
    </div>
  );
}

export default Modal;
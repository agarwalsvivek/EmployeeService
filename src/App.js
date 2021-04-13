import React, { useState, useEffect } from 'react';
import "./styles.css";
import Modal from './Modal.js';


const emp = [
  {
    ID: "EMP_1",
    Name: "Alex Doe",
    deptId: "DEPT_A",
    emailId: "alex@xyz.com",
    phoneNumber: "123456789"
  },
  {
    ID: "EMP_2",
    Name: "Yin Mai",
    deptId: "DEPT_B",
    emailId: "yin@xyz.com",
    phoneNumber: "234567891"
  }
];

const dept = [
  {
    ID: "DEPT_A",
    Name: "Human Resources",
    costCenter: "C1234"
  },
  {
    ID: "DEPT_B",
    Name: "Product Development",
    costCenter: "C5634"
  }
];

const deptMap = new Map();

const App = () => {
  const [ show, setShow ] = useState(false);
  const [selected, setSelected] = useState({});
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState([]);


  const onFilter = (search) => {
    let tempRows = [];
    for (let i = 0; i < emp.length; i++) {
      let includes = emp[i].Name.toLowerCase().includes(search.toLowerCase())
      if(!includes) continue;
      let dept = deptMap.get(emp[i].deptId);
      emp[i].deptName = dept.Name;
      emp[i].costCenter = dept.costCenter;
      tempRows.push(
        <tr key={i}>
          <td>
            <a href="/" onClick={(evt) =>  {
                evt.preventDefault();
                onClick(emp[i])
              }}>
              {emp[i]["ID"]}{" "}
            </a>
          </td>
          <td> {emp[i]["Name"]} </td>
          <td> {deptMap.get(emp[i]["deptId"]).Name} </td>
        </tr>
      );
    }
    setRows(tempRows);
  }


  useEffect(() => {
    onFilter("");
  }, []);

  useEffect( () => {
    //console.log("Search", search)
  }, [search])

  for (let i = 0; i < dept.length; i++) {
    deptMap.set(dept[i].ID, dept[i]);
  }

  const onClick = (emp) => {
    setSelected(emp)
    setShow(true)
  };


  return (
    <div className="App">
      {show ? <Modal show={show} emp={selected} onClick={ () => {
          setShow(false)
      }}/> : ""}
      <input type="search" onInput={(e) => {
        setSearch(e.target.value);
      }}/>
      <button onClick={
        () => {
          onFilter(search)
        }}>Search</button>
      <table>
        <thead>
          <tr>
            <th> ID </th>
            <th> Name </th>
            <th> Dept </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default App;

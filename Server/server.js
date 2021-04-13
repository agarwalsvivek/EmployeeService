const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', function (req, res) {
  res.json(
	  [
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
		]
	  )
})

app.get('/depts', function (req, res) {
  res.json([
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
])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { useEffect } from 'react';

function App() {
  // const [count, setCount] = useState(0)
  // const [name , setName] = useState("")
  // const [age , setAge] = useState(0)
  // const [data, setData]=useState([{
  //   name: "Harshit",
  //   age: 20

  // }, {
  //   name: "Harshita",
  //   age: 22
  // }])
  // console.log(name, age);

  // console.log(data);
  // console.log(...data);
  // return (
  //   <div>
  //     <form onSubmit={e => {
  //       e.preventDefault()
  //       setData([...data, {
  //         name:name,
  //         age:age
  //       }])
  //       console.log("submitted")
  //     }}>
  //       <input type='text' onChange={e => setName(e.target.value)} />
  //       <input type='number'onChange={e => setAge(e.target.value)} />
  //       <button type='submit'>Submit</button>
  //     </form>

  //     {data.map(item => (
  //       <Card name={item.name} age={item.age} />
  //     ))}

  //   </div>
  // )
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setAge] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data1 = await response.json();
      console.log(data1);
      setData(data1);
      setLoading(false);

    }
    fetchData();

  }, [])
  console.log("Data", data)
  // console.log(loading)
  if (loading) return <div><h1>Loading</h1></div>
  return <div>
    <form onSubmit={e => {
      e.preventDefault()
      setData([...data, {
        name: name,
        email: email
      }])
    }}>
      <input type='text' placeholder='Name' onChange={e => { setName(e.target.value) }} />
      <input type='email' placeholder='Email' onChange={e => { setAge(e.target.value) }} />
      <button type='submit'>Submit</button>
    </form>
    {data?.map(item => (
      <Card name={item.name} age={item.email} />
    ))}
  </div>

}

export default App

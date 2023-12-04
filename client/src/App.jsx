import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  const dataFetching = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users");
      const data = res.data;
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataFetching();
  }, []);

  const createUser = () => {
    axios
      .post("http://localhost:5000/createUser", {
        name: name,
        age: age,
        email: email,
      })
      .then((res) => console.log("user created", res.data));
  };

  return (
    <>
      <div>
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="number" placeholder="age" onChange={(e) => setAge(e.target.value)} />
        <br />
        <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button onClick={createUser}>Submit</button>
      </div>
      {users.map((user) => (
        <ul key={user._id}>
          <li>Hello my name is {user.name}</li>
          <li>am {user.age} yo</li>
          <li>contact me at: {user.email}</li>
        </ul>
      ))}
    </>
  );
}

export default App;

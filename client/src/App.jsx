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
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = () => {
    axios
      .post("http://localhost:5000/createUser", {
        name: name,
        age: age,
        email: email,
      })
      .then((res) => {
        console.log("user created", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && email) {
      createUser();
      setEmail("");
      setName("");
      setAge("");
    }
  };

  useEffect(() => {
    dataFetching();
  }, [handleSubmit]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="number"
          value={age}
          placeholder="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input type="submit" value="submit" />
      </form>
      <ul>
        {users.map((user) => (
          <div key={user._id}>
            Hello my name is {user.name}
            am {user.age} yo contact me at: {user.email}
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;

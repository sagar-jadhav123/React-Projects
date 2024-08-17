import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "fName") {
      setFirstName(value);
    } else if (name === "lName") {
      setLastName(value);
    }
  };

  return (
    <>
      <form action="">
        <label htmlFor="firstName">First Name :</label>
        <input
          type="text"
          name="fName"
          onChange={handleChange}
          value={firstName}
        />
        <br />
        <label htmlFor="lastName">Last Name :</label>
        <input
          type="text"
          name="lName"
          onChange={handleChange}
          value={lastName}
        />
        <br />
        <input type="submit" />
        <h1>
          Hii {firstName} {lastName}
        </h1>
      </form>
    </>
  );
}

export default App;

import React, { useState, useContext } from "react";
import UserContext from "../context";
import Navbar from "./Navbar/Navbar";
import "./Install-Kobodrop.css";

const InstallKobodrop = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful");
  };

  return (
    <>
      <Navbar />
      <div className="section__padding">
        <form onSubmit={handleSubmit} className="form">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default InstallKobodrop;

// const InstallKobodrop = () => {
// const user = useContext(UserContext);
// console.log(user);
// const [count, setCount] = useState(100);
// const [name, setName] = useState("");

// useEffect(() => {
//   setTimeout(() => {
//     setCount((count) => count - 1);
//   }, 1000);
// }, []);

// // useEffect(() => {
// //   setTimeout(() => {
// //     setName("Oscar");
// //   }, 5000);
// // });

// return <div>
// InstallKobodrop
// </div>;
// };

// export default InstallKobodrop;

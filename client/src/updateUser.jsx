import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.Name);
        setEmail(result.data.Email);
        setAge(result.data.Age);
      })
      .catch((err) => console.log(err));
  }, []);
  const Update = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/updateUser/${id}`, {
        Name: name,
        Email: email,
        Age: age,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d=flex vh-100 bg-primary justify-content-center align-itmes-center">
      <div className="w-50 bg-whited rounded p-3">
        <form onSubmit={Update}>
          <h2> update User</h2>
          <div className="mb-2">
            <label htmlFor=""> Name </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor=""> Email </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor=""> Age </label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn btn-success"> Update </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
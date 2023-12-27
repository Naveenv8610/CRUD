import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getAll")
      .then((result) => {
        console.log(result);
        setusers(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
      <div className="w-50 bg-white rounded-p3">
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <td> Name </td>
              <td> Email</td>
              <td> Age </td>
              <td> Actions </td>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.Age}</td>
                <td>
                  <Link to={`/update/${user._id}`} className="btn btn-success">
                    {" "}
                    update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    delete{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Users;

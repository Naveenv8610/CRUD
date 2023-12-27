import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./users";
import CreateUser from "./createuser";
import UpdateUser from "./updateuser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}>
            {" "}
          </Route>
          <Route path="/create" element={<CreateUser />}>
            {" "}
          </Route>
          <Route path="/update/:id" element={<UpdateUser />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

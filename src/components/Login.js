import { useState } from "react";
import { useHistory } from "react-router-dom";
import { users } from "../data/users";
const Login = () => {
  const history = useHistory();

  const [userData, setUserData] = useState({});
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState("");

  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = userData;

    if (!username) {
      setError(true);
      return setAlert("Debe ingresar un usuario");
    }

    if (!password) {
      setError(true);
      return setAlert("Debe ingresar un password");
    }

    const userFound = users.find((user) => user.username === username);

    if (!userFound) {
      setError(true);
      return setAlert("Usuario no encontrado");
    }

    history.replace(`/user/${userFound.username}`);

    setError(false);
  };

  return (
    <div className="container-center">
      <div className="card login">
        <div className="card-body card-login">
          <h5 className="card-title">Ingresa tu cuenta</h5>

          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">User</label>
              <input
                type="text"
                className="form-control"
                placeholder="Example input"
                name="username"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={onChange}
              />
            </div>

            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>

      {error && (
        <div className="alert alert-danger mt-4" role="alert">
          {alert}
        </div>
      )}
    </div>
  );
};

export default Login;

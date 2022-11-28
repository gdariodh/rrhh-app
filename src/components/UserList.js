import { useHistory } from "react-router-dom";
import { users } from "../data/users";

const UserList = () => {
  const history = useHistory();

  const onClick = () => {
    history.push("/");
  };

  return (
    <div className="container-fluid">
      <p className="font-weight-bold">Colaboradores:</p>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Cargo</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.position}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-primary" onClick={onClick}>
        Login
      </button>
    </div>
  );
};

export default UserList;

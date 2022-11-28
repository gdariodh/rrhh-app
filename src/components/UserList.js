import { useHistory } from "react-router-dom";
import { users } from "../data/users";

const UserList = () => {
  const history = useHistory();

  const onClick = () => {
    history.push("/");
  };

  return (
    <div className="container mt-2">
      <p className="font-weight-bold my-4 title">Colaboradores:</p>

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

      <div style={{ display: "flex", gap: "3rem" }}>
        <button className="btn btn-primary" onClick={onClick}>
          Cerrar sesion
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => {
            history.goBack();
          }}
        >
          Ver mi perfil
        </button>
      </div>
    </div>
  );
};

export default UserList;

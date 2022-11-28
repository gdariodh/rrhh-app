import { useParams } from "react-router-dom";
import { users } from "../data/users";

const User = () => {
  const params = useParams();

  const userId = params.id;

  const userFound = users.find((user) => user.username === userId);

  return (
    <>
      {userFound ? (
        <div className="card" style={{ width: "18rem;" }}>
          <img
            className="card-img-top"
            src={userFound.img}
            alt="Card image cap"
            style={{ width: "200px", height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              Nombre: {userFound.name} {userFound.lastname}
            </h5>
            <p className="card-text">
              Dias de vacaciones: {userFound.vacation}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cargo: {userFound.position}</li>
            <li className="list-group-item">
              Tipo de contrato: {userFound.contract}
            </li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Solicitar Vacaciones
            </a>
            <a href="#" className="card-link">
              Agendar llamada
            </a>
          </div>
        </div>
      ) : (
        <div className="alert alert-danger mt-4" role="alert">
          Usuario no encontrado
        </div>
      )}
    </>
  );
};

export default User;

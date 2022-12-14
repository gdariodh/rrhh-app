import { useParams, useHistory } from "react-router-dom";
import { users } from "../data/users";

const User = () => {
  const history = useHistory();
  const params = useParams();

  const userId = params.id;

  const userFound = users.find((user) => user.username === userId);

  return (
    <div className="container container-center">
      {userFound ? (
        <div>
          <p className="title mt-5">Tu Perfil:</p>
          <div className="card mt-4">
            <img
              className="card-img-top"
              src={userFound.img}
              alt={`imagen de ${userFound.name}`}
              style={{ maxHeight: "400px" }}
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
              <button className="btn btn-link">Solicitar Vacaciones</button>
              <button className="btn btn-light">Agendar llamada</button>
            </div>
          </div>

          <div className="m-4">
            <button
              className="btn btn-primary mx-2"
              onClick={() => history.replace("/")}
            >
              Cerrar sesion
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => history.push("/userlist")}
            >
              Ver Compañeros
            </button>
          </div>
        </div>
      ) : (
        <div className="alert alert-danger mt-4" role="alert">
          Usuario no encontrado
        </div>
      )}
    </div>
  );
};

export default User;

import NavBar from "../../components/NavBar/index";
import UserList from "../../components/UserList";

function UserRegister() {
  return (
    <div className="life__container__screen">
      <NavBar />
      <div className="life__content">
        <h1 className="life__page__title">Usuários</h1>
        <UserList />
      </div>
    </div>
  );
}

export default UserRegister;

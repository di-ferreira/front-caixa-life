import NavBar from "../../components/NavBar";
import RegisterItem from "../../components/RegisterItem";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListRegisters() {
  return (
    <div className="life__container__screen">
      <NavBar />
      <main className="life__content">
        <h1 className="life__page__title">Registros de Caixa</h1>
        <div className="life__page__content flex__column">
          <nav className="life__register__searchbox">
            Buscar por
            <div className="life__select">
              <select>
                <option>Todos</option>
                <option>Entradas</option>
                <option>Saídas</option>
              </select>
            </div>
            no período de
            <div className="life__input">
              <input type="date" />
            </div>
            a
            <div className="life__input">
              <input type="date" />
            </div>
            <button className="life__btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </nav>
          <ul className="life__register__list">
            <RegisterItem />
            <RegisterItem />
            <RegisterItem />
          </ul>
        </div>
      </main>
    </div>
  );
}

export default ListRegisters;

import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import DatePicker from "react-date-picker";
import {
  faSearch,
  faCalendarAlt,
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleRight,
  faAngleDoubleRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RegisterItem from "../../components/RegisterItem";
import Register from "../Register";

function ListRegisters() {
  const [startDate, setStartDate] = useState(new Date());
  const [resgisters, setRegisters] = useState<any[]>();

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "Entrada 01",
        value: 25.6,
        inflows: true,
        createDate: "2021-06-25",
        userName: "Admin",
      },
      {
        id: 2,
        title: "Saída 01",
        value: 50,
        inflows: false,
        createDate: "2021-06-15",
        userName: "Admin",
      },
      {
        id: 3,
        title: "Entrada 02",
        value: 100.0,
        inflows: true,
        createDate: "2021/06/20",
        userName: "Admin",
      },
      {
        id: 4,
        title: "Saída 02",
        value: 35.75,
        inflows: false,
        createDate: "2021/06/30",
        userName: "Admin",
      },
    ];
    setRegisters(data);
  }, []);

  return (
    <div className="life__container__screen">
      <Register isOpen={true} />
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
              <DatePicker
                onChange={setStartDate}
                value={startDate}
                clearIcon={null}
                calendarIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
              />
            </div>
            a
            <div className="life__input">
              <DatePicker
                onChange={setStartDate}
                value={startDate}
                clearIcon={null}
                calendarIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
              />
            </div>
            <button className="life__btn small">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="life__btn small">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </nav>
          <table className="life__register__list">
            <thead className="life__register__item__title">
              <th>Data</th>
              <th>Título</th>
              <th>Valor</th>
              <th>Tipo</th>
              <th>Usuário</th>
              <th>Ações</th>
            </thead>
            {resgisters?.map((reg) => (
              <tr key={reg.id}>
                <RegisterItem
                  title={reg.title}
                  createDate={reg.createDate}
                  inflows={reg.inflows}
                  userName={reg.userName}
                  value={reg.value}
                />
              </tr>
            ))}
          </table>
          <div className="life__register__pagination">
            <div className="life__select">
              <select>
                <option>15</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
            </div>
            <button className="life__btn">
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </button>
            <button className="life__btn">
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <span className="current_page">1</span>
            de
            <span className="total_page">50</span>
            <button className="life__btn">
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <button className="life__btn">
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ListRegisters;

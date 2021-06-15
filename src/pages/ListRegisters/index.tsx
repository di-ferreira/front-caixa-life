import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import DatePicker from "react-date-picker";
import { faSearch, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RegisterItem from "../../components/RegisterItem";

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
          </nav>
          <ul className="life__register__list">
            {resgisters?.map((reg) => (
              <li key={reg.id}>
                <RegisterItem
                  title={reg.title}
                  createDate={reg.createDate}
                  inflows={reg.inflows}
                  userName={reg.userName}
                  value={reg.value}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default ListRegisters;

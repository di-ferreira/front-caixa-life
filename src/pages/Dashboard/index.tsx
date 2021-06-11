import CardViewValues from "../../components/CardViewValues";
import NavBar from "../../components/NavBar";

function Dashboard() {
  return (
    <div className="life__container__screen">
      <NavBar />
      <div className="life__content">
        <h1 className="life__page__title">Dashboard</h1>
        <div className="life__page__content">
          <CardViewValues
            title="Entradas"
            valueCard="1.000,00"
            typeCard="entrada"
          />
          <CardViewValues title="Saídas" valueCard="500,00" typeCard="saida" />
          <CardViewValues
            title="Total Caixa"
            valueCard="600,00"
            typeCard="total"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

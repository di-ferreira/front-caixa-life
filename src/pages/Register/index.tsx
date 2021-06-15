import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface RegisterProps {
  isOpen: boolean;
}

function Register({ isOpen }: RegisterProps) {
  if (isOpen) {
    return (
      <div className="life__modal">
        <section className="life__modal_main">
          <h1 className="life__page__title">Novo Registro de Caixa</h1>
          <div className="life__form__control">
            <label className="life__form__label">
              <FontAwesomeIcon icon={faDollarSign} />
              Título
            </label>
            <input type="text" placeholder="Título" />
          </div>

          <div className="life__row">
            <div className="life__form__control">
              <label className="life__form__label">
                <FontAwesomeIcon icon={faDollarSign} />
                Valor (R$)
              </label>
              <input type="number" placeholder="Valor" />
            </div>

            <div className="life__form__control">
              <input type="checkbox" />
              <label className="life__form__label">Saída</label>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return <div className="d-none"></div>;
  }
}

export default Register;

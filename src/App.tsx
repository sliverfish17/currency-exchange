import { useEffect, useState } from "react";
import Converter from "./components/Converter";
import Header from "./components/Header";
import CountryModal from "./components/Modal/CountryModal";
import { useTypedSelector } from "./hooks/useTypedSelector";
import style from "./styles/app.module.scss";
import modalStyle from "./styles/modal.module.scss";

function App() {
  const [modal, setModalActive] = useState(false);
  const { country } = useTypedSelector((state) => state.country);

  const outsideClick = (e) => {
    if (
      e.target.className === modalStyle.modal ||
      e.target.className === modalStyle.modal__content_button
    ) {
      setModalActive(false);
    }
  };

  useEffect(() => {
    setModalActive(true);
  }, []);

  return (
    <div className={style.app}>
      <Header />
      <Converter />
      {modal && (
        <CountryModal
          active={modal}
          outsideClick={outsideClick}
          country={country}
        ></CountryModal>
      )}
    </div>
  );
}

export default App;

import { FC, useState } from "react";
import { ModalList } from "./ModalList";
import { useImperativeDisableScroll } from "../../hooks/useImperativeDisableScroll";
import { localStorageCustom } from "../../utils/localStorageCustom";
import {
  SetModalOpenType,
  SetFigureType,
  SetPropertyValueType,
} from "../../page/Tools";

import styles from "./styles.module.css";

type ModalType = {
  setModalOpen: SetModalOpenType;
  setFigure: SetFigureType;
  setCssPropertyValue: SetPropertyValueType;
};

export const Modal: FC<ModalType> = ({
  setModalOpen,
  setFigure,
  setCssPropertyValue,
}) => {
  const body = document.querySelector("body");
  useImperativeDisableScroll(body, true);
  const css = localStorageCustom();
  const [cssList, setCssList] = useState(css);

  return (
    <div className={styles.modal}>
      <div
        className={styles.modal_overlay}
        onClick={() => setModalOpen(false)}
      ></div>
      <div className={styles.modal_content}>
        {cssList.map((elem, idx) => {
          return (
            <ModalList
              key={elem[0] as string}
              elem={elem}
              idx={idx + 1}
              setFigure={setFigure}
              setCssPropertyValue={setCssPropertyValue}
              setModalOpen={setModalOpen}
              setCssList={setCssList}
            />
          );
        })}
      </div>
    </div>
  );
};

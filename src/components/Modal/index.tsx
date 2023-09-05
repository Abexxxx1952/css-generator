import { FC } from "react";
import { ModalList } from "./ModalList";
import { useImperativeDisableScroll } from "../../hooks/useImperativeDisableScroll";
import { useLocalStorageCustom } from "../../hooks/useLocalStorageCustom";
import { setModalOpenType } from "../../page/Tools";

import styles from "./styles.module.css";

type ModalType = {
  setModalOpen: setModalOpenType;
};

export const Modal: FC<ModalType> = ({ setModalOpen }) => {
  const body = document.querySelector("body");
  useImperativeDisableScroll(body, true);

  const cssList = useLocalStorageCustom();

  return (
    <div className={styles.modal}>
      <div
        className={styles.modal_overlay}
        onClick={() => setModalOpen(false)}
      ></div>
      <div className={styles.modal_content}>
        {cssList.map((elem, idx) => {
          return <ModalList elem={elem} idx={idx + 1} key={elem[0]} />;
        })}
      </div>
    </div>
  );
};

import { FC } from "react";

import styles from "./styles.module.css";

type ModalListType = {
  elem: (string | string)[];
  idx: number;
};

export const ModalList: FC<ModalListType> = ({ elem, idx }) => {
  return (
    <div className={styles.list_container}>
      <div className={styles.list_number}>{idx}</div>
      <div className={styles.list_key}>{elem[0]}</div>
      <div className={styles.list_value}>{elem[1]}</div>
    </div>
  );
};

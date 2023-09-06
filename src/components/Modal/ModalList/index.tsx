import { FC } from "react";
import { useLocalStorageOneCustomType } from "../../../hooks/useLocalStorageCustom";
import { dataFromLocalStorageToString } from "../../../utils/dataFromLocalStorageToString";

import { transformDataFromLocalStorage } from "../../../utils/transformDataFromLocalStorage";
import {
  SetFigureType,
  SetPropertyValueType,
  SetModalOpenType,
} from "../../../page/Tools";
import styles from "./styles.module.css";

type ModalListType = {
  elem: useLocalStorageOneCustomType;
  idx: number;
  setFigure: SetFigureType;
  setCssPropertyValue: SetPropertyValueType;
  setModalOpen: SetModalOpenType;
};

export const ModalList: FC<ModalListType> = ({
  elem,
  idx,
  setFigure,
  setCssPropertyValue,
  setModalOpen,
}) => {
  let listValue = dataFromLocalStorageToString(elem);

  const handleClick = () => {
    const { figure, cssProperty } = transformDataFromLocalStorage(
      elem[0] as string
    );
    console.log(cssProperty);
    setFigure(figure.value);
    setCssPropertyValue(cssProperty);
    setModalOpen(false);
  };

  return (
    <div className={styles.list_container} onClick={handleClick}>
      <div className={styles.list_number}>{idx}</div>
      <div className={styles.list_key}>{elem[0] as string} </div>
      <div className={styles.list_value}>{listValue}</div>
    </div>
  );
};

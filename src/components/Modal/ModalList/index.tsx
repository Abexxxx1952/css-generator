import { FC } from "react";
import {
  localStorageCustom,
  LocalStorageOneCustomType,
  SetLocalStorageCustomType,
} from "../../../utils/localStorageCustom";
import { dataFromLocalStorageToString } from "../../../utils/dataFromLocalStorageToString";

import { transformDataFromLocalStorage } from "../../../utils/transformDataFromLocalStorage";
import {
  SetFigureType,
  SetPropertyValueType,
  SetModalOpenType,
} from "../../../page/Tools";
import DeleteIcon from "../../../assets/delete-icon.png";
import styles from "./styles.module.css";

type ModalListType = {
  elem: LocalStorageOneCustomType;
  idx: number;
  setFigure: SetFigureType;
  setCssPropertyValue: SetPropertyValueType;
  setModalOpen: SetModalOpenType;
  setCssList: SetLocalStorageCustomType;
};

export const ModalList: FC<ModalListType> = ({
  elem,
  idx,
  setFigure,
  setCssPropertyValue,
  setModalOpen,
  setCssList,
}) => {
  let listValue = dataFromLocalStorageToString(elem);
  const { figure, cssProperty } = transformDataFromLocalStorage(
    elem[0] as string
  );
  const handleClickList = () => {
    setFigure(figure.value);
    setCssPropertyValue(cssProperty);
    setModalOpen(false);
  };
  const handleClickDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    try {
      window.localStorage.removeItem(elem[0] as string);
    } catch (error) {
      console.warn(`Error deleting localStorage key “${elem[0]}”:`, error);
    }
    const css = localStorageCustom();
    setCssList(css);
  };

  return (
    <div className={styles.list_container} onClick={handleClickList}>
      <div className={styles.list_number}>{idx}</div>
      <div className={styles.list_key}>{elem[0] as string} </div>
      <div className={styles.list_value}>{listValue}</div>
      <div className={styles.delete_container}>
        <img
          className={styles.delete_icon}
          src={DeleteIcon}
          alt="Delete_icon"
          onClick={handleClickDelete}
        />
      </div>
    </div>
  );
};

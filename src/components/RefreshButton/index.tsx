import { FC } from "react";
import { SetURLSearchParams } from "react-router-dom";
import { SetPropertyValueType, SetFigureType } from "../../page/Tools";
import { cssProperty } from "../../constants/constants";
import RefreshIcon from "../../assets/refresh.png";

import styles from "./styles.module.css";

type RefreshButtonProps = {
  setFigure: SetFigureType;
  setCssPropertyValue: SetPropertyValueType;
  setSearchParams: SetURLSearchParams;
};

export const RefreshButton: FC<RefreshButtonProps> = ({
  setFigure,
  setCssPropertyValue,
  setSearchParams,
}) => {
  const handleFavoriteClick = () => {
    setFigure("Square");
    setCssPropertyValue(cssProperty);
    setSearchParams({});
  };

  return (
    <div className={styles.button_container}>
      <img
        className={styles.item_icon}
        src={RefreshIcon}
        alt="RefreshIcon"
        onClick={handleFavoriteClick}
      />
    </div>
  );
};

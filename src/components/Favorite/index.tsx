import { FC, useState } from "react";
import {
  cssPropertyType,
  FigureType,
  SetModalOpenType,
} from "../../page/Tools";
import { transformDataToLocalStorage } from "../../utils/transformDataToLocalStorage";
import FavoriteIcon from "../../assets/favorite-50.png";
import FavoriteIconActive from "../../assets/favorite-active-50.png";
import ListIcon from "../../assets/list-50.png";

import styles from "./styles.module.css";

type FavoriteProps = {
  figure: FigureType;
  cssPropertyValue: cssPropertyType;
  setModalOpen: SetModalOpenType;
};

export const Favorite: FC<FavoriteProps> = ({
  figure,
  cssPropertyValue,
  setModalOpen,
}) => {
  const [favoriteIcon, setFavoriteIcon] = useState(FavoriteIcon);

  const handleFavoriteClick = () => {
    const figureKey =
      figure + " " + new Date().toLocaleString("ru-RU", { timeZone: "UTC" });

    const transformedValue = transformDataToLocalStorage(
      figure,
      cssPropertyValue
    );

    try {
      const stringifyValue = JSON.stringify(transformedValue);
      window.localStorage.setItem(figureKey, stringifyValue);
    } catch (error) {
      console.warn(`Error writing localStorage key “${figureKey}”:`, error);
    }
  };

  const handleFavoriteFocus = () => {
    setFavoriteIcon(FavoriteIconActive);
  };
  const handleFavoriteBlur = () => {
    setFavoriteIcon(FavoriteIcon);
  };

  return (
    <div className={styles.favorite_container}>
      <div className={styles.item}>
        <img
          className={styles.item_icon}
          src={favoriteIcon}
          alt="Favorite"
          onMouseEnter={handleFavoriteFocus}
          onMouseLeave={handleFavoriteBlur}
          onClick={handleFavoriteClick}
        />
      </div>
      <div className={styles.item}>
        <img
          className={styles.item_icon}
          src={ListIcon}
          alt="List"
          onClick={() => setModalOpen((prev) => !prev)}
        />
      </div>
    </div>
  );
};

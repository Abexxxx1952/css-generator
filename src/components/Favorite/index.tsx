import { FC, useState } from "react";
import { cssPropertyType, FigureType } from "../../page/Tools";
import FavoriteIcon from "../../assets/favorite-50.png";
import FavoriteIconActive from "../../assets/favorite-active-50.png";
import ListIcon from "../../assets/list-50.png";

import styles from "./styles.module.css";

type FavoriteProps = {
  figure: FigureType;
  cssPropertyValue: cssPropertyType;
};

export const Favorite: FC<FavoriteProps> = ({ figure, cssPropertyValue }) => {
  const [favoriteIcon, setFavoriteIcon] = useState(FavoriteIcon);

  const handleFavoriteClick = (e: React.MouseEvent<HTMLElement>) => {
    const stringifyValue = JSON.stringify([figure, ...cssPropertyValue]);
    window.localStorage.setItem(stringifyValue, stringifyValue);
  };

  const handleFavoriteFocus = (e: React.MouseEvent<HTMLDivElement>) => {
    setFavoriteIcon(FavoriteIconActive);
  };
  const handleFavoriteBlur = (e: React.MouseEvent<HTMLDivElement>) => {
    setFavoriteIcon(FavoriteIcon);
  };

  return (
    <div className={styles.favoriteContainer}>
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
          /*  onClick={handleChange} */
        />
      </div>
    </div>
  );
};

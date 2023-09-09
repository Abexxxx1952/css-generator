import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { SetFigureType, FigureType, cssPropertyType } from "../../page/Tools";
import {
  transformDataToPath,
  transformDataToPathType,
} from "../../utils/transformDataToPath";
import Pentagon from "../../assets/pentagon-48.png";
import Polygon from "../../assets/polygon-50.png";
import Square from "../../assets/square-50.png";
import Triangle from "../../assets/triangle-48.png";

import styles from "./styles.module.css";
type GeometricFigureProps = {
  setFigure: SetFigureType;

  cssPropertyValue: cssPropertyType;
};

export const GeometricFigure: FC<GeometricFigureProps> = ({
  setFigure,

  cssPropertyValue,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();
  const handleChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const dataToPath: transformDataToPathType = transformDataToPath(
      e.currentTarget.dataset.figure as FigureType,
      cssPropertyValue
    );
    setSearchParams(dataToPath);

    setFigure(e.currentTarget.dataset.figure as FigureType);
  };

  return (
    <div className={styles.geometric_container}>
      <div className={styles.figure_container}>
        <img
          className={styles.figure}
          src={Pentagon}
          alt="Pentagon"
          data-figure="Pentagon"
          onClick={handleChange}
        />
      </div>
      <div className={styles.figure_container}>
        <img
          className={styles.figure}
          src={Polygon}
          alt="Polygon"
          data-figure="Polygon"
          onClick={handleChange}
        />
      </div>

      <div className={styles.figure_container}>
        <img
          className={styles.figure}
          src={Square}
          alt="Square"
          data-figure="Square"
          onClick={handleChange}
        />
      </div>

      <div className={styles.figure_container}>
        <img
          className={styles.figure}
          src={Triangle}
          alt="Triangle"
          data-figure="Triangle"
          onClick={handleChange}
        />
      </div>
    </div>
  );
};

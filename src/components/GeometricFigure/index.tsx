import { FC } from "react";
import { SetFigureType, FigureType } from "../../page/Tools";
import Pentagon from "../../assets/pentagon-48.png";
import Polygon from "../../assets/polygon-50.png";
import Square from "../../assets/square-50.png";
import Triangle from "../../assets/triangle-48.png";

import styles from "./styles.module.css";
type GeometricFigureProps = {
  setFigure: SetFigureType;
};

export const GeometricFigure: FC<GeometricFigureProps> = ({ setFigure }) => {
  const handleChange = (e: React.MouseEvent<HTMLDivElement>) => {
    setFigure(e.currentTarget.dataset.figure as FigureType);
  };

  return (
    <div className={styles.geometricContainer}>
      <div className={styles.figureContainer}>
        <img
          className={styles.figure}
          src={Pentagon}
          alt="Pentagon"
          data-figure="Pentagon"
          onClick={handleChange}
        />
      </div>
      <div className={styles.figureContainer}>
        <img
          className={styles.figure}
          src={Polygon}
          alt="Polygon"
          data-figure="Polygon"
          onClick={handleChange}
        />
      </div>

      <div className={styles.figureContainer}>
        <img
          className={styles.figure}
          src={Square}
          alt="Square"
          data-figure="Square"
          onClick={handleChange}
        />
      </div>

      <div className={styles.figureContainer}>
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

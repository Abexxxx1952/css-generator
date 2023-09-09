import { useErrorBoundary } from "react-error-boundary";

import Gear from "../../assets/gear.png";
import style from "./style.module.css";

export const ErrorFallback = ({ error }) => {
  const { resetBoundary } = useErrorBoundary();
  return (
    <div className={style.container}>
      <img className={style.img} src={Gear} alt="Not Found" />
      <p className={style.text}>Сайт сломался!</p>
      <p className={style.text}>{error}</p>
      <button className={style.container__error_button} onClick={resetBoundary}>
        Попробовать починить
      </button>
    </div>
  );
};

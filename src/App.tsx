import { FC } from "react";
import { Tools } from "./page/Tools";

import style from "./App.module.css";

const App: FC = () => {
  return (
    <main className={style.main_container}>
      <h1 className={style.h1}>Another CSS tools for web designers</h1>

      <Tools />
    </main>
  );
};

export default App;

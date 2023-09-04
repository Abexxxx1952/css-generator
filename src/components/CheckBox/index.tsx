import { FC } from "react";

import { ToolsProps, OnePropertyValueType } from "../../page/Tools";
import { CHECKBOX } from "../../constants/constants";
import styles from "./styles.module.css";

export const CheckBox: FC<ToolsProps> = ({
  idx,
  setPropertyValue,
  allProperty,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPropertyValue([
      ...allProperty.slice(0, idx),
      {
        propertyName: allProperty[idx].propertyName,
        type: CHECKBOX,
        status: e.currentTarget.checked,
        active: true,
      } as OnePropertyValueType,
      ...allProperty.slice(idx + 1),
    ]);
  };

  return (
    <div className={styles.checkBox}>
      <h3>{allProperty[idx].propertyName}</h3>
      <div className={styles.roundedOne}>
        <input
          type="checkbox"
          value="None"
          id="roundedOne"
          name="check"
          onChange={handleChange}
        />
        <label htmlFor="roundedOne"></label>
      </div>
    </div>
  );
};

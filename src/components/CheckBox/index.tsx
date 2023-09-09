import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { ToolsProps, OnePropertyValueType } from "../../page/Tools";
import { CHECKBOX } from "../../constants/constants";
import {
  transformDataToPath,
  transformDataToPathType,
} from "../../utils/transformDataToPath";
import styles from "./styles.module.css";

export const CheckBox: FC<ToolsProps> = ({
  idx,
  figure,
  setPropertyValue,
  allProperty,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const property = [
      ...allProperty.slice(0, idx),
      {
        propertyName: allProperty[idx].propertyName,
        type: CHECKBOX,
        status: e.currentTarget.checked,
        active: true,
      } as OnePropertyValueType,
      ...allProperty.slice(idx + 1),
    ];

    const dataToPath: transformDataToPathType = transformDataToPath(
      figure,
      property
    );

    setSearchParams(dataToPath);
    setPropertyValue(property);
  };

  return (
    <div className={styles.checkBox}>
      <h3>{allProperty[idx].propertyName}</h3>
      <div className={styles.roundedOne}>
        <input
          type="checkbox"
          checked={!!allProperty[idx].status}
          id="roundedOne"
          name="check"
          onChange={handleChange}
        />
        <label htmlFor="roundedOne"></label>
      </div>
    </div>
  );
};

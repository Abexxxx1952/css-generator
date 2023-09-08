import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { HexColorPicker } from "react-colorful";
import { ToolsProps, OnePropertyValueType } from "../../page/Tools";
import { COLORPICKER } from "../../constants/constants";
import { setActiveToFalse } from "../../utils/setActiveToFalse";
import {
  transformDataToPath,
  transformDataToPathType,
} from "../../utils/transformDataToPath";

import "./styles.css";

export const ColorPicker: FC<ToolsProps> = ({
  idx,
  figure,
  setPropertyValue,
  allProperty,
}) => {
  const [_, setSearchParams] = useSearchParams();
  const handleChange = (color: string) => {
    if (allProperty[idx].propertyName === "Box Color") {
      setActiveToFalse(allProperty, "Background Gradient");
    }
    const property = [
      ...allProperty.slice(0, idx),
      {
        propertyName: allProperty[idx].propertyName,
        type: COLORPICKER,
        value: color,
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
    <div className="colorPicker">
      <h3>{allProperty[idx].propertyName}</h3>
      <HexColorPicker color={allProperty[idx].value} onChange={handleChange} />
    </div>
  );
};

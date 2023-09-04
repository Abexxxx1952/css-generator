import { FC } from "react";
import { HexColorPicker } from "react-colorful";
import { ToolsProps, OnePropertyValueType } from "../../page/Tools";
import { COLORPICKER } from "../../constants/constants";
import { setActiveToFalse } from "../../utils/setActiveToFalse";

import "./styles.css";

export const ColorPicker: FC<ToolsProps> = ({
  idx,
  setPropertyValue,
  allProperty,
}) => {
  const handleChange = (color: string) => {
    if (allProperty[idx].propertyName === "Box Color") {
      setActiveToFalse(allProperty, "Background Gradient");
    }

    setPropertyValue([
      ...allProperty.slice(0, idx),
      {
        propertyName: allProperty[idx].propertyName,
        type: COLORPICKER,
        value: color,
        active: true,
      } as OnePropertyValueType,
      ...allProperty.slice(idx + 1),
    ]);
  };

  return (
    <div className="colorPicker">
      <h3>{allProperty[idx].propertyName}</h3>
      <HexColorPicker color={allProperty[idx].value} onChange={handleChange} />
    </div>
  );
};

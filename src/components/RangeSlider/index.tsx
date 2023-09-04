import React, { FC } from "react";

import { ToolsProps, OnePropertyValueType } from "../Tools";
import { RANGESLIDER } from "../../constants/constants";
import styles from "./styles.module.css";

export const RangeSlider: FC<ToolsProps> = ({
  idx,
  setPropertyValue,
  allProperty,
  setOwnPropertyValue,
  customProperty,
}) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPropertyValue([
      ...allProperty.slice(0, idx),
      {
        propertyName: allProperty[idx].propertyName,
        type: RANGESLIDER,
        min: allProperty[idx].min,
        max: allProperty[idx].max,
        value: e.currentTarget.value,
        step: allProperty[idx].step,
        active: true,
      } as OnePropertyValueType,
      ...allProperty.slice(idx + 1),
    ]);
  };

  return (
    <div className={styles.range}>
      <h3>
        {customProperty
          ? customProperty.propertyName
          : allProperty[idx].propertyName}
      </h3>
      <div className={styles.sliderValue}>
        <span>
          {customProperty ? customProperty.value : allProperty[idx].value}
        </span>
      </div>

      <div className={styles.field}>
        <div className={styles.value}>
          {customProperty ? customProperty.min : allProperty[idx].min}
        </div>
        <input
          type="range"
          min={customProperty ? customProperty.min : allProperty[idx].min}
          max={customProperty ? customProperty.max : allProperty[idx].max}
          value={customProperty ? customProperty.value : allProperty[idx].value}
          step={customProperty ? customProperty.step : allProperty[idx].step}
          onInput={setOwnPropertyValue ? setOwnPropertyValue : handleChange}
        />
        <div className={styles.value}>
          {customProperty ? customProperty.max : allProperty[idx].max}
        </div>
      </div>
    </div>
  );
};

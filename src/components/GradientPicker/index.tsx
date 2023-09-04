import { FC } from "react";
import { DropDown } from "./DropDown";
import { RangeSlider } from "../RangeSlider";
import { HuePicker, ColorResult, AlphaPicker } from "react-color";

import { ToolsProps, OnePropertyValueType } from "../../page/Tools";
import { GRADIENTPICKER } from "../../constants/constants";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { setActiveToFalse } from "../../utils/setActiveToFalse";

import styles from "./styles.module.css";

export const GradientPicker: FC<ToolsProps> = ({
  idx,
  setPropertyValue,
  allProperty,
}) => {
  const options = [
    { value: "linear-gradient", label: "Linear-gradient" },
    { value: "radial-gradient", label: "Radial-gradient" },
    { value: "conic-gradient", label: "Conic-gradient" },
  ];

  /* ----------------------DropDown Handler---------------------- */

  const OrientationChangeHandler = (value: string) => {
    setActiveToFalse(allProperty, "Box Color");

    setPropertyValue([
      ...allProperty.slice(0, idx),
      {
        propertyName: allProperty[idx].propertyName,
        type: GRADIENTPICKER,
        orientation: value,
        degree: allProperty[idx].degree,
        position: allProperty[idx].position,
        firstColor: allProperty[idx].firstColor,

        secondColor: allProperty[idx].secondColor,
        active: true,
      } as OnePropertyValueType,
      ...allProperty.slice(idx + 1),
    ]);
  };
  /* ----------------------RangeSlider Handler(degree)---------------------- */
  const DegreeChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setActiveToFalse(allProperty, "Box Color");
    setPropertyValue([
      ...allProperty.slice(0, idx),
      {
        propertyName: allProperty[idx].propertyName,
        type: GRADIENTPICKER,
        orientation: allProperty[idx].orientation,
        degree: {
          min: allProperty[idx].degree?.min,
          max: allProperty[idx].degree?.max,
          value: e.currentTarget.value,
          step: allProperty[idx].degree?.step,
          propertyName: allProperty[idx].degree?.propertyName,
        },
        position: allProperty[idx].position,
        firstColor: allProperty[idx].firstColor,

        secondColor: allProperty[idx].secondColor,
        active: true,
      } as OnePropertyValueType,
      ...allProperty.slice(idx + 1),
    ]);
  };
  /* ----------------------RangeSlider Handler(position)---------------------- */
  const PositionChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setActiveToFalse(allProperty, "Box Color");
    setPropertyValue([
      ...allProperty.slice(0, idx),
      {
        propertyName: allProperty[idx].propertyName,
        type: GRADIENTPICKER,
        orientation: allProperty[idx].orientation,
        degree: allProperty[idx].degree,
        position: {
          min: allProperty[idx].position?.min,
          max: allProperty[idx].position?.max,
          value: e.currentTarget.value,
          step: allProperty[idx].position?.step,
          propertyName: allProperty[idx].position?.propertyName,
        },
        firstColor: allProperty[idx].firstColor,

        secondColor: allProperty[idx].secondColor,
        active: true,
      } as OnePropertyValueType,
      ...allProperty.slice(idx + 1),
    ]);
  };

  /* ----------------------First HuePicker Handler---------------------- */
  const HueFirstColorChangeHandler = (color: ColorResult) => {
    setActiveToFalse(allProperty, "Box Color");
    setPropertyValue([
      ...allProperty.slice(0, idx),
      {
        propertyName: allProperty[idx].propertyName,
        type: GRADIENTPICKER,
        orientation: allProperty[idx].orientation,
        degree: allProperty[idx].degree,
        position: allProperty[idx].position,
        firstColor: {
          hex: color.hex,
          hsl: {
            a: allProperty[idx].firstColor?.hsl.a,
            h: color.hsl.h,
            l: color.hsl.l,
            s: color.hsl.s,
          },
          rgb: {
            a: allProperty[idx].firstColor?.rgb.a,
            b: color.rgb.b,
            g: color.rgb.g,
            r: color.rgb.r,
          },
        },

        secondColor: allProperty[idx].secondColor,
        active: true,
      } as OnePropertyValueType,
      ...allProperty.slice(idx + 1),
    ]);
  };
  /* ----------------------First AlphaPicker Handler---------------------- */
  const AlphaFirstColorChangeHandler = (color: ColorResult) => {
    setActiveToFalse(allProperty, "Box Color");
    setPropertyValue([
      ...allProperty.slice(0, idx),
      {
        propertyName: allProperty[idx].propertyName,
        type: GRADIENTPICKER,
        orientation: allProperty[idx].orientation,
        degree: allProperty[idx].degree,
        position: allProperty[idx].position,
        firstColor: {
          hex: allProperty[idx].firstColor?.hex,
          hsl: {
            a: color.hsl.a,
            h: allProperty[idx].firstColor?.hsl.h,
            l: allProperty[idx].firstColor?.hsl.l,
            s: allProperty[idx].firstColor?.hsl.s,
          },
          rgb: {
            a: color.rgb.a,
            b: allProperty[idx].firstColor?.rgb.b,
            g: allProperty[idx].firstColor?.rgb.g,
            r: allProperty[idx].firstColor?.rgb.r,
          },
        },

        secondColor: allProperty[idx].secondColor,
        active: true,
      } as OnePropertyValueType,
      ...allProperty.slice(idx + 1),
    ]);
  };
  /* ----------------------Second HuePicker Handler---------------------- */
  const HueSecondColorChangeHandler = (color: ColorResult) => {
    setActiveToFalse(allProperty, "Box Color");
    setPropertyValue([
      ...allProperty.slice(0, idx),
      {
        propertyName: allProperty[idx].propertyName,
        type: GRADIENTPICKER,
        orientation: allProperty[idx].orientation,
        degree: allProperty[idx].degree,
        position: allProperty[idx].position,
        firstColor: allProperty[idx].firstColor,
        secondColor: {
          hex: color.hex,
          hsl: {
            a: allProperty[idx].secondColor?.hsl.a,
            h: color.hsl.h,
            l: color.hsl.l,
            s: color.hsl.s,
          },
          rgb: {
            a: allProperty[idx].secondColor?.rgb.a,
            b: color.rgb.b,
            g: color.rgb.g,
            r: color.rgb.r,
          },
        },
        active: true,
      } as OnePropertyValueType,
      ...allProperty.slice(idx + 1),
    ]);
  };
  /* ----------------------Second AlphaPicker Handler---------------------- */
  const AlphaSecondColorChangeHandler = (color: ColorResult) => {
    setActiveToFalse(allProperty, "Box Color");
    setPropertyValue([
      ...allProperty.slice(0, idx),
      {
        propertyName: allProperty[idx].propertyName,
        type: GRADIENTPICKER,
        orientation: allProperty[idx].orientation,
        degree: allProperty[idx].degree,
        position: allProperty[idx].position,
        firstColor: allProperty[idx].firstColor,
        secondColor: {
          hex: allProperty[idx].secondColor?.hex,
          hsl: {
            a: color.hsl.a,
            h: allProperty[idx].secondColor?.hsl.h,
            l: allProperty[idx].secondColor?.hsl.l,
            s: allProperty[idx].secondColor?.hsl.s,
          },
          rgb: {
            a: color.rgb.a,
            b: allProperty[idx].secondColor?.rgb.b,
            g: allProperty[idx].secondColor?.rgb.g,
            r: allProperty[idx].secondColor?.rgb.r,
          },
        },
        active: true,
      } as OnePropertyValueType,
      ...allProperty.slice(idx + 1),
    ]);
  };

  const mutch1300: boolean = useMediaQuery("(max-width: 1300px)");
  const mutch1000: boolean = useMediaQuery("(max-width: 1000px)");
  const mutch740: boolean = useMediaQuery("(max-width: 740px)");

  const colorWidth = mutch740
    ? "150px"
    : mutch1000
    ? "200px"
    : mutch1300
    ? "275px"
    : "350px";
  return (
    <div className={styles.gradientPicker}>
      <h3>{allProperty[idx].propertyName} Orientation</h3>
      <div className={styles.dropDown}>
        <DropDown
          options={options}
          handleChange={OrientationChangeHandler}
          allProperty={allProperty}
          idx={idx}
        />
      </div>
      {/*   --------------------------Degree-------------------------- */}
      <div className={styles.rangeSlider}>
        <RangeSlider
          idx={idx}
          setPropertyValue={setPropertyValue}
          allProperty={allProperty}
          setOwnPropertyValue={DegreeChangeHandler}
          customProperty={allProperty[idx].degree}
        />
      </div>
      {/*  ----------------------Position---------------------- */}
      <div className={styles.rangeSlider}>
        <RangeSlider
          idx={idx}
          setPropertyValue={setPropertyValue}
          allProperty={allProperty}
          setOwnPropertyValue={PositionChangeHandler}
          customProperty={allProperty[idx].position}
        />
      </div>
      <div className={styles.color}>
        <h3>From Color</h3>
        <HuePicker
          width={colorWidth}
          color={allProperty[idx].firstColor?.hsl}
          onChange={HueFirstColorChangeHandler}
        />
        <div className={styles.alphaPicker}>
          <AlphaPicker
            width={colorWidth}
            color={allProperty[idx].firstColor?.hsl}
            onChange={AlphaFirstColorChangeHandler}
          />
        </div>
      </div>
      <div className={styles.color}>
        <h3>To Color</h3>
        <HuePicker
          width={colorWidth}
          color={allProperty[idx].secondColor?.hsl}
          onChange={HueSecondColorChangeHandler}
        />
        <div className={styles.alphaPicker}>
          <AlphaPicker
            width={colorWidth}
            color={allProperty[idx].secondColor?.hsl}
            onChange={AlphaSecondColorChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};

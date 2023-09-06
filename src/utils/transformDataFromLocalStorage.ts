import {
  cssPropertyType,
  FigureType,
  OnePropertyValueType,
} from "../page/Tools";
import { cssProperty as cssPropertyConstant } from "../constants/constants";

export const transformDataFromLocalStorage = (key: string) => {
  let item!: Array<any>;
  try {
    const itemString = window.localStorage.getItem(key) as string;
    item = JSON.parse(itemString);
  } catch (error) {
    console.warn(`Error reading localStorage key “${key}”:`, error);
  }

  const figure: { [key: string]: FigureType } = item[0];
  const cssPropertyFromLocalStorage: cssPropertyType = item.slice(1);

  const cssProperty: cssPropertyType = [];

  cssPropertyConstant.forEach((elemConstant) => {
    cssProperty.push(elemConstant as OnePropertyValueType);
    cssPropertyFromLocalStorage.forEach((elemFromLocalStorage) => {
      if (elemConstant.propertyName === elemFromLocalStorage.propertyName) {
        const combinedElem = {
          ...elemConstant,
          ...elemFromLocalStorage,
          active: true,
        };
        cssProperty.pop();
        cssProperty.push(combinedElem as OnePropertyValueType);
      }
    });

    /* if (elem.propertyName === "Background Gradient") {
        return {
          propertyName: "Background Gradient",
          type: "gradientPicker",
          orientation: elem.orientation,
          degree: {
            min: "0",
            max: "360",
            value: elem.degree?.value,
            step: "1",
            propertyName: "Degree",
          },
          position: {
            min: "0",
            max: "100",
            value: elem.position?.value,
            step: "1",
            propertyName: "Position",
          },
          firstColor: {
            hex: "#BF3E3E",
            hsl: {
              a: 0.5,
              h: 0,
              l: 51,
              s: 50,
            },
            rgb: {
              a: elem.firstColor.rgb.a,
              b: elem.firstColor.rgb.b,
              g: elem.firstColor.rgb.g,
              r: elem.firstColor.rgb.r,
            },
          },

          secondColor: {
            hex: "#867272",
            hsl: {
              a: 0.5,
              h: 0,
              l: 51,
              s: 50,
            },
            rgb: {
              a: elem.secondColor.rgb.a,
              b: elem.secondColor.rgb.b,
              g: elem.secondColor.rgb.g,
              r: elem.secondColor.rgb.r,
            },
          },
          active: true,
        };
      }

      if (
        elem.propertyName === "Box Color" ||
        elem.propertyName === "Text Color" ||
        elem.propertyName === "Shadow Color" ||
        elem.propertyName === "Text Shadow Color"
      ) {
        return {
          propertyName: elem.propertyName,
          type: "colorPicker",
          value: elem.value,
          active: true,
        };
      }
      if (
        elem.propertyName === "Border Radius" ||
        elem.propertyName === "Horizontal Length" ||
        elem.propertyName === "Vertical Length" ||
        elem.propertyName === "Blur Radius" ||
        elem.propertyName === "Spread Radius" ||
        elem.propertyName === "Shadow Opacity" ||
        elem.propertyName === "Shadow LengthX" ||
        elem.propertyName === "Shadow LengthY" ||
        elem.propertyName === "Blur" ||
        elem.propertyName === "Text Shadow Opacity" ||
        elem.propertyName === "Scale" ||
        elem.propertyName === "Rotate" ||
        elem.propertyName === "Translate X" ||
        elem.propertyName === "Translate Y" ||
        elem.propertyName === "Skew X" ||
        elem.propertyName === "Skew Y"
      ) {
        return {
          propertyName: elem.propertyName,
          type: "rangeSlider",
          min: "0",
          max: "150",
          value: elem.value,
          step: "1",
          active: true,
        };
      } */
  });

  return { figure, cssProperty };
};

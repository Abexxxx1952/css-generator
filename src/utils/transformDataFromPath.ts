import {
  cssPropertyType,
  FigureType,
  OnePropertyValueType,
} from "../page/Tools";
import { transformDataToPathType } from "../utils/transformDataToPath";
import { cssProperty as cssPropertyConstant } from "../constants/constants";

export const transformDataFromPath = (
  dataFromPathProperty: transformDataToPathType
) => {
  const figure: FigureType = dataFromPathProperty["Figure"];

  const cssProperty: cssPropertyType = [];

  cssPropertyConstant.forEach((elemConstant) => {
    cssProperty.push(elemConstant as OnePropertyValueType);

    if (Object.hasOwn(dataFromPathProperty, elemConstant.propertyName)) {
      let combinedElem;
      if (elemConstant.propertyName === "Outline") {
        combinedElem = {
          ...elemConstant,
          status: dataFromPathProperty[elemConstant.propertyName],
          active: true,
        };
        return;
      }
      if (elemConstant.propertyName === "Background Gradient") {
        const firstColor: number[] =
          dataFromPathProperty["Background Gradient firstColor"].split(" ");
        const secondColor: number[] =
          dataFromPathProperty["Background Gradient secondColor"].split(" ");
        combinedElem = {
          ...elemConstant,
          orientation: dataFromPathProperty["Background Gradient orientation"],
          degree: {
            min: "0",
            max: "360",
            value: dataFromPathProperty["Background Gradient degree"],
            step: "1",
            propertyName: "Degree",
          },
          position: {
            min: "0",
            max: "100",
            value: dataFromPathProperty["Background Gradient position"],
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
              a: firstColor[3],
              b: firstColor[2],
              g: firstColor[1],
              r: firstColor[0],
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
              a: secondColor[3],
              b: secondColor[2],
              g: secondColor[1],
              r: secondColor[0],
            },
          },
          active: true,
        };
        return;
      }
      combinedElem = {
        ...elemConstant,
        value: dataFromPathProperty[elemConstant.propertyName],
        active: true,
      };

      cssProperty.pop();
      cssProperty.push(combinedElem as OnePropertyValueType);
    }
  });

  return { figure, cssProperty };
};

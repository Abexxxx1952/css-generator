import {
  cssPropertyType,
  FigureType,
  OnePropertyValueType,
} from "../page/Tools";

import { cssProperty as cssPropertyConstant } from "../constants/constants";

export const transformDataFromPath = (
  dataFromPathProperty: URLSearchParams
) => {
  const figure: FigureType =
    (dataFromPathProperty.get("Figure") as FigureType) ?? "Square";

  const cssProperty: cssPropertyType = [];
  const hasBackgroundGradient = dataFromPathProperty.has(
    "Background Gradient orientation"
  );
  cssPropertyConstant.forEach((elemConstant) => {
    cssProperty.push(elemConstant as OnePropertyValueType);
    let combinedElem;
    if (
      hasBackgroundGradient &&
      elemConstant.propertyName === "Background Gradient"
    ) {
      const firstColor = dataFromPathProperty
        .get("Background Gradient firstColor")!
        .split(" ");
      const secondColor = dataFromPathProperty
        .get("Background Gradient secondColor")!
        .split(" ");

      combinedElem = {
        ...elemConstant,
        orientation: dataFromPathProperty.get(
          "Background Gradient orientation"
        ),
        degree: {
          min: "0",
          max: "360",
          value: dataFromPathProperty.get("Background Gradient degree"),
          step: "1",
          propertyName: "Degree",
        },
        position: {
          min: "0",
          max: "100",
          value: dataFromPathProperty.get("Background Gradient position"),
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
            a: +firstColor[3],
            b: +firstColor[2],
            g: +firstColor[1],
            r: +firstColor[0],
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
            a: +secondColor[3],
            b: +secondColor[2],
            g: +secondColor[1],
            r: +secondColor[0],
          },
        },
        active: true,
      };
      cssProperty.pop();
      cssProperty.push(combinedElem as OnePropertyValueType);

      return;
    }
    if (dataFromPathProperty.has(elemConstant.propertyName)) {
      if (elemConstant.propertyName === "Outline") {
        combinedElem = {
          ...elemConstant,
          status: !!dataFromPathProperty.get(elemConstant.propertyName),
          active: true,
        };
        cssProperty.pop();
        cssProperty.push(combinedElem as OnePropertyValueType);

        return;
      }

      combinedElem = {
        ...elemConstant,
        value: dataFromPathProperty.get(elemConstant.propertyName),
        active: true,
      };

      cssProperty.pop();
      cssProperty.push(combinedElem as OnePropertyValueType);
    }
  });

  return { figure, cssProperty };
};

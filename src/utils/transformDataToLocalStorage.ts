import { cssPropertyType, FigureType } from "../page/Tools";
export type transformDataToLocalStorageType = ReturnType<
  typeof transformDataToLocalStorage
>;

export const transformDataToLocalStorage = (
  figure: FigureType,
  allProperty: cssPropertyType
) => {
  const transformedDate: Array<any> = [
    { propertyName: "Figure", value: figure },
  ];
  allProperty.forEach((elem) => {
    if (elem.propertyName === "Outline" && elem.active === true) {
      const obj = {
        propertyName: elem.propertyName,
        status: elem.status,
      };
      transformedDate.push(obj);
      return;
    }

    if (elem.propertyName === "Background Gradient" && elem.active === true) {
      const obj = {
        propertyName: elem.propertyName,
        orientation: elem.orientation,
        degree: elem.degree?.value,
        position: elem.position?.value,
        firstColor: {
          rgb: {
            r: elem.firstColor?.rgb.r,
            g: elem.firstColor?.rgb.g,
            b: elem.firstColor?.rgb.b,
            a: elem.firstColor?.rgb.a,
          },
        },
        secondColor: {
          rgb: {
            r: elem.secondColor?.rgb.r,
            g: elem.secondColor?.rgb.g,
            b: elem.secondColor?.rgb.b,
            a: elem.secondColor?.rgb.a,
          },
        },
      };

      transformedDate.push(obj);
      return;
    }
    if (elem.active === true) {
      const obj = { propertyName: elem.propertyName, value: elem.value };
      transformedDate.push(obj);
    }
  });

  return transformedDate;
};

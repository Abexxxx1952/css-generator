import { cssPropertyType } from "../page/Tools";

export const transformDataToLocalStorage = (allProperty: cssPropertyType) => {
  const transformedDate = allProperty.map((elem) => {
    if (elem.propertyName === "Outline") {
      return { propertyName: elem.propertyName, status: elem.status };
    }

    if (elem.propertyName === "Background Gradient") {
      return {
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
    }

    return { propertyName: elem.propertyName, value: elem.value };
  });

  return transformedDate;
};

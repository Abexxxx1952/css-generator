import { cssPropertyType, FigureType } from "../page/Tools";
export type transformDataToPathType = ReturnType<typeof transformDataToPath>;

export const transformDataToPath = (
  figure: FigureType,
  allProperty: cssPropertyType
) => {
  const map = new Map();
  map.set("Figure", figure);
  allProperty.forEach((elem) => {
    if (elem.propertyName === "Outline" && elem.active === true) {
      map.set(elem.propertyName, elem.status);
      return;
    }

    if (elem.propertyName === "Background Gradient" && elem.active === true) {
      map.set("Background Gradient orientation", elem.orientation);
      map.set("Background Gradient degree", elem.degree?.value);
      map.set("Background Gradient position", elem.position?.value);
      map.set(
        "Background Gradient firstColor",
        `${elem.firstColor?.rgb.r} ${elem.firstColor?.rgb.g} ${elem.firstColor?.rgb.b} ${elem.firstColor?.rgb.a}`
      );
      map.set(
        "Background Gradient secondColor",
        `${elem.secondColor?.rgb.r} ${elem.secondColor?.rgb.g} ${elem.secondColor?.rgb.b} ${elem.secondColor?.rgb.a}`
      );

      return;
    }
    if (elem.active === true) {
      map.set(elem.propertyName, elem.value);
    }
  });
  const transformedDate = Object.fromEntries(map);

  return transformedDate;
};

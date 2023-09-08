export const dataFromLocalStorageToString = (elem: Array<any>) => {
  let listValue = "";
  [...(elem[1] as Array<any>)].forEach((elem) => {
    if (elem.propertyName === "Outline") {
      listValue += `${elem.propertyName}=${elem.status} `;
      return;
    }

    if (elem.propertyName === "Background Gradient") {
      listValue += `Orientation=${elem.orientation} Degree=${elem.degree} Position=${elem.position} FirstColor=rgb:{
         r: ${elem.firstColor?.rgb.r},
         g: ${elem.firstColor?.rgb.g},
         b: ${elem.firstColor?.rgb.b},
         a: ${elem.firstColor?.rgb.a},
       } SecondColor=rgb:{
         r: ${elem.secondColor?.rgb.r},
         g: ${elem.secondColor?.rgb.g},
         b: ${elem.secondColor?.rgb.b},
         a: ${elem.secondColor?.rgb.a},
       } `;
      return;
    }

    listValue += `${elem.propertyName}=${elem.value} `;
  });
  return listValue;
};

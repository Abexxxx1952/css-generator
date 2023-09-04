import { FC } from "react";
import { cssPropertyType, FigureType } from "../../page/Tools";
import { hexToRgb } from "../../utils/hexToRGB";
import styles from "./styles.module.css";

type ElementBoxPropsType = {
  cssPropertyValue: cssPropertyType;
  figure: FigureType;
};

export const ElementBox: FC<ElementBoxPropsType> = ({
  cssPropertyValue,
  figure,
}) => {
  let borderRadius!: string | undefined;
  let boxColor!: { value: string | undefined; active: boolean };
  let textColor!: string | undefined;
  let horizontalLength!: { value: string | undefined; active: boolean };
  let verticalLength!: { value: string | undefined; active: boolean };
  let blurRadius!: { value: string | undefined; active: boolean };
  let spreadRadius!: { value: string | undefined; active: boolean };
  let shadowColor!: { value: string | undefined; active: boolean };
  let shadowOpacity!: { value: string | undefined; active: boolean };
  let outline!: { status: boolean | undefined; active: boolean };
  let backgroundGradient!: {
    orientation: string | undefined;
    degree: string | undefined;
    position: string | undefined;
    firstColor: { a: number; b: number; g: number; r: number } | undefined;
    secondColor: { a: number; b: number; g: number; r: number } | undefined;
    active: boolean;
  };
  let horizontalShadowLength!: { value: string | undefined; active: boolean };
  let verticalShadowLength!: { value: string | undefined; active: boolean };
  let blur!: { value: string | undefined; active: boolean };
  let textShadowOpacity!: { value: string | undefined; active: boolean };
  let textShadowColor!: { value: string | undefined; active: boolean };
  let scale!: { value: string | undefined; active: boolean };
  let rotate!: { value: string | undefined; active: boolean };
  let translateX!: { value: string | undefined; active: boolean };
  let translateY!: { value: string | undefined; active: boolean };
  let skewX!: { value: string | undefined; active: boolean };
  let skewY!: { value: string | undefined; active: boolean };

  cssPropertyValue.forEach((elem) => {
    switch (elem.propertyName) {
      case "Border Radius": {
        borderRadius = elem.value;
        break;
      }
      case "Box Color": {
        boxColor = { value: elem.value, active: elem.active };
        break;
      }
      case "Text Color": {
        textColor = elem.value;
        break;
      }

      case "Horizontal Length": {
        horizontalLength = { value: elem.value, active: elem.active };
        break;
      }
      case "Vertical Length": {
        verticalLength = { value: elem.value, active: elem.active };
        break;
      }
      case "Blur Radius": {
        blurRadius = { value: elem.value, active: elem.active };
        break;
      }
      case "Spread Radius": {
        spreadRadius = { value: elem.value, active: elem.active };
        break;
      }
      case "Shadow Color": {
        shadowColor = { value: elem.value, active: elem.active };
        break;
      }
      case "Shadow Opacity": {
        shadowOpacity = { value: elem.value, active: elem.active };
        break;
      }
      case "Outline": {
        outline = { status: elem.status, active: elem.active };
        break;
      }

      case "Background Gradient": {
        backgroundGradient = {
          orientation: elem.orientation,
          degree: elem.degree?.value,
          position: elem.position?.value,
          firstColor: elem.firstColor?.rgb,
          secondColor: elem.secondColor?.rgb,
          active: elem.active,
        };
        break;
      }

      case "Shadow LengthX": {
        horizontalShadowLength = { value: elem.value, active: elem.active };
        break;
      }
      case "Shadow LengthY": {
        verticalShadowLength = { value: elem.value, active: elem.active };
        break;
      }
      case "Blur": {
        blur = { value: elem.value, active: elem.active };
        break;
      }
      case "Text Shadow Opacity": {
        textShadowOpacity = { value: elem.value, active: elem.active };
        break;
      }
      case "Text Shadow Color": {
        textShadowColor = { value: elem.value, active: elem.active };
        break;
      }
      case "Scale": {
        scale = { value: elem.value, active: elem.active };
        break;
      }
      case "Rotate": {
        rotate = { value: elem.value, active: elem.active };
        break;
      }

      case "Translate X": {
        translateX = { value: elem.value, active: elem.active };
        break;
      }
      case "Translate Y": {
        translateY = { value: elem.value, active: elem.active };
        break;
      }
      case "Skew X": {
        skewX = { value: elem.value, active: elem.active };
        break;
      }
      case "Skew Y": {
        skewY = { value: elem.value, active: elem.active };
        break;
      }
      default: {
        break;
      }
    }
  });

  /* -------------------Box Shadow---------------- */

  const boxShadowActive: boolean =
    horizontalLength.active ||
    verticalLength.active ||
    blurRadius.active ||
    spreadRadius.active ||
    shadowColor.active ||
    shadowOpacity.active ||
    outline.active;

  const boxShadowRGB: number[] | undefined = hexToRgb(
    shadowColor.value as string
  );

  const boxShadow = boxShadowActive
    ? `${horizontalLength.value}px ${verticalLength.value}px ${
        blurRadius.value
      }px ${spreadRadius.value}px rgba(${boxShadowRGB?.[0]},${
        boxShadowRGB?.[1]
      },${boxShadowRGB?.[2]},${shadowOpacity.value}) ${
        outline.status ? "inset" : ""
      }`
    : "";

  /* -------------------Background Gradient---------------- */

  const background = boxColor.active
    ? boxColor.value
    : backgroundGradient.active &&
      backgroundGradient.orientation === "linear-gradient"
    ? `linear-gradient(${backgroundGradient.degree}deg, rgba(${backgroundGradient.firstColor?.r}, ${backgroundGradient.firstColor?.g},${backgroundGradient.firstColor?.b},${backgroundGradient.firstColor?.a} ) ${backgroundGradient.position}%, rgba(${backgroundGradient.secondColor?.r}, ${backgroundGradient.secondColor?.g},${backgroundGradient.secondColor?.b},${backgroundGradient.secondColor?.a} ))`
    : backgroundGradient.active &&
      backgroundGradient.orientation === "radial-gradient"
    ? `radial-gradient( rgba(${backgroundGradient.firstColor?.r}, ${backgroundGradient.firstColor?.g},${backgroundGradient.firstColor?.b},${backgroundGradient.firstColor?.a} ) ${backgroundGradient.position}%, rgba(${backgroundGradient.secondColor?.r}, ${backgroundGradient.secondColor?.g},${backgroundGradient.secondColor?.b},${backgroundGradient.secondColor?.a} ))`
    : backgroundGradient.active &&
      backgroundGradient.orientation === "conic-gradient"
    ? `conic-gradient(from ${backgroundGradient.degree}deg, rgba(${backgroundGradient.firstColor?.r}, ${backgroundGradient.firstColor?.g},${backgroundGradient.firstColor?.b},${backgroundGradient.firstColor?.a} ) ${backgroundGradient.position}%, rgba(${backgroundGradient.secondColor?.r}, ${backgroundGradient.secondColor?.g},${backgroundGradient.secondColor?.b},${backgroundGradient.secondColor?.a} ))`
    : "";

  /* -------------------Text Shadow---------------- */

  const textShadowActive: boolean =
    horizontalShadowLength.active ||
    verticalShadowLength.active ||
    blur.active ||
    textShadowOpacity.active ||
    textShadowColor.active;

  const textShadowRGB: number[] | undefined = hexToRgb(
    textShadowColor.value as string
  );
  const textShadow = textShadowActive
    ? `${horizontalShadowLength.value}px ${verticalShadowLength.value}px ${blur.value}px rgba(${textShadowRGB?.[0]},${textShadowRGB?.[1]},${textShadowRGB?.[2]},${textShadowOpacity.value})`
    : "";

  /* -------------------Transform---------------- */
  const transformActive: boolean =
    scale.active ||
    rotate.active ||
    translateX.active ||
    translateY.active ||
    skewX.active ||
    skewY.active;
  const transform = transformActive
    ? `${scale.active ? `scale(${scale.value})` : ""} ${
        rotate.active ? `rotate(${rotate.value}deg)` : ""
      } ${
        translateX.active || translateY.active
          ? `translate(${translateX.value}px,${translateY.value}px)`
          : ""
      } ${
        skewX.active || skewY.active
          ? `skew(${skewX.value}deg,${skewY.value}deg)`
          : ""
      }`
    : "";

  /* -------------------clip-path---------------- */

  const polygon =
    figure === "Triangle"
      ? "polygon(50% 0, 0 80%, 100% 80%)"
      : figure === "Square"
      ? ""
      : figure === "Pentagon"
      ? "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
      : figure === "Polygon"
      ? "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
      : "";

  return (
    <div className={styles.container}>
      <div
        style={{
          borderRadius: `${borderRadius}px`,
          background: background,
          color: textColor,
          boxShadow: boxShadow,
          textShadow: textShadow,
          transform: transform,
          clipPath: polygon,
        }}
        className={styles.element}
      >
        Some Text
      </div>
      <div className={styles.cssCode}>
        border-radius: {borderRadius}px;
        {boxColor.active && <br />}
        {boxColor.active && `background-color: ${boxColor.value};`} <br />
        color: {textColor};{/* -------------------Box Shadow---------------- */}
        {boxShadowActive && <br />}
        {boxShadowActive &&
          `box-shadow: ${horizontalLength.value}px ${verticalLength.value}px ${
            blurRadius.value
          }px ${spreadRadius.value}px rgba(${boxShadowRGB?.[0]},${
            boxShadowRGB?.[1]
          },${boxShadowRGB?.[2]},${shadowOpacity.value}) ${
            outline.status ? "inset" : ""
          };`}
        {boxShadowActive && <br />}
        {boxShadowActive &&
          `-webkit-box-shadow: ${horizontalLength.value}px ${
            verticalLength.value
          }px ${blurRadius.value}px ${spreadRadius.value}px rgba(${
            boxShadowRGB?.[0]
          },${boxShadowRGB?.[1]},${boxShadowRGB?.[2]},${shadowOpacity.value}) ${
            outline.status ? "inset" : ""
          };`}
        {boxShadowActive && <br />}
        {boxShadowActive &&
          `-moz-box-shadow: ${horizontalLength.value}px ${
            verticalLength.value
          }px ${blurRadius.value}px ${spreadRadius.value}px rgba(${
            boxShadowRGB?.[0]
          },${boxShadowRGB?.[1]},${boxShadowRGB?.[2]},${shadowOpacity.value}) ${
            outline.status ? "inset" : ""
          };`}
        {/* -------------------Background Gradient---------------- */}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "linear-gradient" && <br />}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "linear-gradient" &&
          `background: linear-gradient(${backgroundGradient.degree}deg,  rgba(${backgroundGradient.firstColor?.r}, ${backgroundGradient.firstColor?.g},${backgroundGradient.firstColor?.b},${backgroundGradient.firstColor?.a} ) ${backgroundGradient.position}% ,  rgba(${backgroundGradient.secondColor?.r}, ${backgroundGradient.secondColor?.g},${backgroundGradient.secondColor?.b},${backgroundGradient.secondColor?.a} ));`}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "linear-gradient" && <br />}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "linear-gradient" &&
          `background: -webkit-linear-gradient(${backgroundGradient.degree}deg,  rgba(${backgroundGradient.firstColor?.r}, ${backgroundGradient.firstColor?.g},${backgroundGradient.firstColor?.b},${backgroundGradient.firstColor?.a} ) ${backgroundGradient.position}%,  rgba(${backgroundGradient.secondColor?.r}, ${backgroundGradient.secondColor?.g},${backgroundGradient.secondColor?.b},${backgroundGradient.secondColor?.a} ));`}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "linear-gradient" && <br />}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "linear-gradient" &&
          `background: -moz-linear-gradient(${backgroundGradient.degree}deg,  rgba(${backgroundGradient.firstColor?.r}, ${backgroundGradient.firstColor?.g},${backgroundGradient.firstColor?.b},${backgroundGradient.firstColor?.a} ) ${backgroundGradient.position}%,  rgba(${backgroundGradient.secondColor?.r}, ${backgroundGradient.secondColor?.g},${backgroundGradient.secondColor?.b},${backgroundGradient.secondColor?.a} ));`}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "radial-gradient" && <br />}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "radial-gradient" &&
          `background: radial-gradient(${backgroundGradient.degree}deg,  rgba(${backgroundGradient.firstColor?.r}, ${backgroundGradient.firstColor?.g},${backgroundGradient.firstColor?.b},${backgroundGradient.firstColor?.a} ) ${backgroundGradient.position}% ,  rgba(${backgroundGradient.secondColor?.r}, ${backgroundGradient.secondColor?.g},${backgroundGradient.secondColor?.b},${backgroundGradient.secondColor?.a} ));`}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "radial-gradient" && <br />}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "radial-gradient" &&
          `background: -webkit-radial-gradient(${backgroundGradient.degree}deg,  rgba(${backgroundGradient.firstColor?.r}, ${backgroundGradient.firstColor?.g},${backgroundGradient.firstColor?.b},${backgroundGradient.firstColor?.a} ) ${backgroundGradient.position}%,  rgba(${backgroundGradient.secondColor?.r}, ${backgroundGradient.secondColor?.g},${backgroundGradient.secondColor?.b},${backgroundGradient.secondColor?.a} ));`}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "radial-gradient" && <br />}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "radial-gradient" &&
          `background: -moz-radial-gradient(${backgroundGradient.degree}deg,  rgba(${backgroundGradient.firstColor?.r}, ${backgroundGradient.firstColor?.g},${backgroundGradient.firstColor?.b},${backgroundGradient.firstColor?.a} ) ${backgroundGradient.position}%,  rgba(${backgroundGradient.secondColor?.r}, ${backgroundGradient.secondColor?.g},${backgroundGradient.secondColor?.b},${backgroundGradient.secondColor?.a} ));`}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "conic-gradient" && <br />}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "conic-gradient" &&
          `background: conic-gradient(${backgroundGradient.degree}deg,  rgba(${backgroundGradient.firstColor?.r}, ${backgroundGradient.firstColor?.g},${backgroundGradient.firstColor?.b},${backgroundGradient.firstColor?.a} ) ${backgroundGradient.position}% ,  rgba(${backgroundGradient.secondColor?.r}, ${backgroundGradient.secondColor?.g},${backgroundGradient.secondColor?.b},${backgroundGradient.secondColor?.a} ));`}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "conic-gradient" && <br />}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "conic-gradient" &&
          `background: -webkit-conic-gradient(${backgroundGradient.degree}deg,  rgba(${backgroundGradient.firstColor?.r}, ${backgroundGradient.firstColor?.g},${backgroundGradient.firstColor?.b},${backgroundGradient.firstColor?.a} ) ${backgroundGradient.position}%,  rgba(${backgroundGradient.secondColor?.r}, ${backgroundGradient.secondColor?.g},${backgroundGradient.secondColor?.b},${backgroundGradient.secondColor?.a} ));`}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "conic-gradient" && <br />}
        {backgroundGradient.active &&
          backgroundGradient.orientation === "conic-gradient" &&
          `background: -moz-conic-gradient(${backgroundGradient.degree}deg,  rgba(${backgroundGradient.firstColor?.r}, ${backgroundGradient.firstColor?.g},${backgroundGradient.firstColor?.b},${backgroundGradient.firstColor?.a} ) ${backgroundGradient.position}%,  rgba(${backgroundGradient.secondColor?.r}, ${backgroundGradient.secondColor?.g},${backgroundGradient.secondColor?.b},${backgroundGradient.secondColor?.a} ));`}
        {/* -------------------Text Shadow---------------- */}
        {textShadowActive && <br />}
        {textShadowActive &&
          `text-shadow: ${horizontalShadowLength.value}px ${verticalShadowLength.value}px ${blur.value}px rgba(${textShadowRGB?.[0]},${textShadowRGB?.[1]},${textShadowRGB?.[2]},${textShadowOpacity.value})`}
        {/* -------------------Transform---------------- */}
        {transformActive && <br />}
        {transformActive &&
          `transform: ${scale.active ? `scale(${scale.value})` : ""} ${
            rotate.active ? `rotate(${rotate.value}deg)` : ""
          } ${
            translateX.active || translateY.active
              ? `translate(${translateX.value}px,${translateY.value}px)`
              : ""
          } ${
            skewX.active || skewY.active
              ? `skew(${skewX.value}deg,${skewY.value}deg)`
              : ""
          }`}
        {transformActive && <br />}
        {transformActive &&
          `-webkit-transform: ${scale.active ? `scale(${scale.value})` : ""} ${
            rotate.active ? `rotate(${rotate.value}deg)` : ""
          } ${
            translateX.active || translateY.active
              ? `translate(${translateX.value}px,${translateY.value}px)`
              : ""
          } ${
            skewX.active || skewY.active
              ? `skew(${skewX.value}deg,${skewY.value}deg)`
              : ""
          } `}
        {transformActive && <br />}
        {transformActive &&
          `-moz-transform: ${scale.active ? `scale(${scale.value})` : ""} ${
            rotate.active ? `rotate(${rotate.value}deg)` : ""
          } ${
            translateX.active || translateY.active
              ? `translate(${translateX.value}px,${translateY.value}px)`
              : ""
          } ${
            skewX.active || skewY.active
              ? `skew(${skewX.value}deg,${skewY.value}deg)`
              : ""
          }`}
      </div>
    </div>
  );
};

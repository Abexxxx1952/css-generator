import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { GeometricFigure } from "../../components/GeometricFigure";
import { Favorite } from "../../components/Favorite";
import { Modal } from "../../components/Modal";
import { RangeSlider } from "../../components/RangeSlider";
import { ColorPicker } from "../../components/ColorPicker";
import { CheckBox } from "../../components/CheckBox";
import { GradientPicker } from "../../components/GradientPicker";
import { ElementBox } from "../../components/ElementBox";
import {
  cssProperty,
  COLORPICKER,
  RANGESLIDER,
  CHECKBOX,
  GRADIENTPICKER,
} from "../../constants/constants";

import styles from "./styles.module.css";

export type cssPropertyType = typeof cssProperty;

export type OnePropertyValueType = cssPropertyType[number];

type SetPropertyValueType = React.Dispatch<
  React.SetStateAction<cssPropertyType>
>;

type CustomProperty = {
  propertyName: string;
  min: string;
  max: string;
  value: string;
  step: string;
};
export type ToolsProps = {
  idx: number;
  setPropertyValue: SetPropertyValueType;
  setOwnPropertyValue?: (e: React.FormEvent<HTMLInputElement>) => void;
  allProperty: cssPropertyType;
  customProperty?: CustomProperty;
};
export type FigureType = "Pentagon" | "Polygon" | "Triangle" | "Square";
export type SetFigureType = React.Dispatch<React.SetStateAction<FigureType>>;
export type setModalOpenType = React.Dispatch<React.SetStateAction<boolean>>;

export const Tools: FC = () => {
  const [cssPropertyValue, setCssPropertyValue] =
    useState<cssPropertyType>(cssProperty);
  const [figure, setFigure] = useState<FigureType>("Square");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <article className={styles.container}>
      <section className={styles.tools_container}>
        {/* /----------------------Base Property----------------------/ */}

        <h2>Base Property</h2>
        {cssPropertyValue.slice(0, 3).map((property, idx) => {
          if (property.type === RANGESLIDER) {
            return (
              <React.Fragment key={property.propertyName}>
                <RangeSlider
                  idx={idx}
                  setPropertyValue={setCssPropertyValue}
                  allProperty={cssPropertyValue}
                />
              </React.Fragment>
            );
          }
          if (property.type === COLORPICKER) {
            return (
              <React.Fragment key={property.propertyName}>
                <ColorPicker
                  idx={idx}
                  setPropertyValue={setCssPropertyValue}
                  allProperty={cssPropertyValue}
                />
              </React.Fragment>
            );
          }

          return null;
        })}

        {/* /----------------------Box Shadow----------------------/ */}
        <h2>Box Shadow</h2>
        {cssPropertyValue.slice(3, 10).map((property, idx) => {
          const amendment = 3;
          if (property.type === RANGESLIDER) {
            return (
              <React.Fragment key={property.propertyName}>
                <RangeSlider
                  idx={idx + amendment}
                  setPropertyValue={setCssPropertyValue}
                  allProperty={cssPropertyValue}
                />
              </React.Fragment>
            );
          }
          if (property.type === COLORPICKER) {
            return (
              <React.Fragment key={property.propertyName}>
                <ColorPicker
                  idx={idx + amendment}
                  setPropertyValue={setCssPropertyValue}
                  allProperty={cssPropertyValue}
                />
              </React.Fragment>
            );
          }
          if (property.type === CHECKBOX) {
            return (
              <React.Fragment key={property.propertyName}>
                <CheckBox
                  idx={idx + amendment}
                  setPropertyValue={setCssPropertyValue}
                  allProperty={cssPropertyValue}
                />
              </React.Fragment>
            );
          }
          return null;
        })}
        {/* /----------------------Background Gradient----------------------/ */}
        <h2>Background Gradient</h2>
        {cssPropertyValue.slice(10, 11).map((property, idx) => {
          const amendment = 10;
          if (property.type === GRADIENTPICKER) {
            return (
              <React.Fragment key={property.propertyName}>
                <GradientPicker
                  idx={idx + amendment}
                  setPropertyValue={setCssPropertyValue}
                  allProperty={cssPropertyValue}
                />
              </React.Fragment>
            );
          }

          return null;
        })}
        {/* /----------------------Text Shadow----------------------/ */}
        <h2>Text Shadow</h2>
        {cssPropertyValue.slice(11, 16).map((property, idx) => {
          const amendment = 11;

          if (property.type === RANGESLIDER) {
            return (
              <React.Fragment key={property.propertyName}>
                <RangeSlider
                  idx={idx + amendment}
                  setPropertyValue={setCssPropertyValue}
                  allProperty={cssPropertyValue}
                />
              </React.Fragment>
            );
          }
          if (property.type === COLORPICKER) {
            return (
              <React.Fragment key={property.propertyName}>
                <ColorPicker
                  idx={idx + amendment}
                  setPropertyValue={setCssPropertyValue}
                  allProperty={cssPropertyValue}
                />
              </React.Fragment>
            );
          }

          return null;
        })}

        {/* /----------------------Transform----------------------/ */}
        <h2>Transform</h2>
        {cssPropertyValue.slice(16, 22).map((property, idx) => {
          const amendment = 16;

          if (property.type === RANGESLIDER) {
            return (
              <React.Fragment key={property.propertyName}>
                <RangeSlider
                  idx={idx + amendment}
                  setPropertyValue={setCssPropertyValue}
                  allProperty={cssPropertyValue}
                />
              </React.Fragment>
            );
          }

          return null;
        })}
      </section>

      <section className={styles.element_container}>
        <GeometricFigure setFigure={setFigure} />
        <Favorite
          cssPropertyValue={cssPropertyValue}
          figure={figure}
          setModalOpen={setModalOpen}
        />
        {createPortal(
          modalOpen && <Modal setModalOpen={setModalOpen} />,
          document.body
        )}
        <ElementBox cssPropertyValue={cssPropertyValue} figure={figure} />
      </section>
    </article>
  );
};

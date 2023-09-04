import { useState, FC, useRef } from "react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { cssPropertyType } from "../../../page/Tools";
import "./styles.css";

type DropDownList = {
  value: string;
  label: string;
}[];

type DropDownProps = {
  options: DropDownList;
  handleChange: (value: string) => void;
  allProperty: cssPropertyType;
  idx: number;
};

export const DropDown: FC<DropDownProps> = ({
  options,
  handleChange,
  allProperty,
  idx,
}) => {
  const [dropdownState, setDropdownState] = useState(false);

  const ref = useRef(null);

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };
  const handleSetDropdownValue = (value: string) => {
    console.log(value);
    handleChange(value);
    setDropdownState(!dropdownState);
  };

  const handleDropdownClose = () => {
    setDropdownState(false);
  };
  useOutsideClick(ref, handleDropdownClose);
  return (
    <div className={`dropdown`} ref={ref}>
      <button onClick={handleDropdownClick} className="dropdown-btn">
        {allProperty[idx].orientation?.slice(0, 1).toUpperCase()}
        {allProperty[idx].orientation?.slice(1)}
      </button>

      <div
        className={`dropdown-items ${dropdownState ? "isVisible" : "isHidden"}`}
      >
        {options.map((elem) => {
          return (
            <div className="dropdown-item" key={elem.value}>
              <div
                className="dropdown__link"
                onClick={() => handleSetDropdownValue(elem.value)}
              >
                {elem.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

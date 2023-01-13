import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ titulo, descricao }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div
        className="flex flex-col text-gray-light cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="pt-3"></div>
        <div className="border-2 ">
          <div className="flex flex-row items-center  border-red-soberana text-gray-light cursor-pointer border-b-2">
            <p
              className={`text-lg font-extra-bold  flex-auto   hover:text-soberana-red ${
                isActive ? "text-gray-dark font-black" : "font-bold"
              }`}
            >
              {titulo}
              <i className="float-right">
                {isActive && <FontAwesomeIcon icon={faChevronUp} />}
                {!isActive && <FontAwesomeIcon icon={faChevronDown} />}
              </i>
            </p>
          </div>

          {isActive && (
            <div>
              <p className="text-lg">{descricao}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

import { cloneElement, useState } from "react";

const Accordion = ({ children, onlyOne = false }) => {
  const [openItem, setOpenItem] = useState([]);
  const handleToggle = (index) => {
    setOpenItem((prev) => {
      if (onlyOne) {
        return prev[0] === index ? [] : [index];
      } else {
        return prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index];
      }
    });
  };
  return (
    <div className="accordion">
      {children.map((item, index) => {
        return cloneElement(item, {
          isOpen: openItem.includes(index),
          onToggle: () => handleToggle(index),
        });
      })}
    </div>
  );
};
export default Accordion;
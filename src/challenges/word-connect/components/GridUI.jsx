import { forwardRef, useImperativeHandle, useState } from "react";
import "./styles.css"; // Use the regular CSS file instead of SCSS

const GridUI = forwardRef(function GridUI(
  { items, cols, onSelection, status },
  ref
) {
  const [selected, setSelected] = useState([]);

  // Mark the selection and inform the parent
  const markSelection = (item) => {
    if (status) {
      return;
    }

    let newSelected = [];
    if (selected.includes(item)) {
      newSelected = selected.filter((i) => i !== item);
    } else {
      newSelected = [...selected, item];
    }

    setSelected(newSelected);
    onSelection(newSelected);
  };

  function clearSelection() {
    setSelected([]);
  }

  // Expose clearSelection method to the parent
  useImperativeHandle(ref, () => ({ clearSelection }));

  return (
    <section
      data-status={status}
      className="grid" // Change from styles.grid to className="grid"
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {items.map((item) => {
        const isSelected = selected.includes(item);
        const className = `itemBtn ${isSelected ? "highlight" : ""} ${
          isSelected && status ? status : ""
        }`;
        return (
          <button
            key={item}
            className={className}
            onClick={() => markSelection(item)}
          >
            {item}
          </button>
        );
      })}
    </section>
  );
});

export default GridUI;

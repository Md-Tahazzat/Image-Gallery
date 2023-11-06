import React, { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { getGalleryContext } from "./ContextProvider";

const ImgBox = ({ item, index, reorderItems }) => {
  const { setSelectedItems, selectedItems } = getGalleryContext();
  const [selected, setSelected] = useState(false);
  const checkboxRef = useRef(null);

  const handleSelect = (id) => {
    const isChecked = checkboxRef.current.checked;
    if (!!isChecked) {
      setSelected(true);
      setSelectedItems((prevItems) => [...prevItems, id]);
    } else {
      setSelectedItems((prevItems) => prevItems.filter((item) => item !== id));
      setSelected(false);
    }
  };

  const [{ isDragging }, drag] = useDrag({
    type: "Image",
    item: { index },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  const [, drop] = useDrop({
    accept: "Image",
    drop: (droppedItem, monitor) => {
      if (monitor.didDrop) {
        reorderItems(droppedItem.index, index);
        droppedItem.index = index;
      }
    },
  });
  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`box group ${index === 0 ? "large-img-box " : ""} ${
        isDragging && "opacity-20"
      }`}
    >
      <div
        className={`blur-container ${
          selected && "bg-slate-300/50"
        } group-hover:bg-slate-500/50`}
      >
        {" "}
      </div>
      <img draggable index={index} src={item.url} alt="" />
      <input
        ref={checkboxRef}
        onClick={() => handleSelect(item.id)}
        className="absolute top-4 left-4 w-6 h-6"
        type="checkbox"
      />
    </div>
  );
};

export default ImgBox;

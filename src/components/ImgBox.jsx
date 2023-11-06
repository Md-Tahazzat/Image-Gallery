import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

const ImgBox = ({
  item,
  index,
  reorderItems,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
}) => {
  const [hoverItem, setHoverItem] = useState(null);
  // const boxRef = useRef(null);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   // get the box width
  //   if (boxRef.current) {
  //     const width = boxRef.current.clientWidth;
  //     boxRef.current.style.height = `${width}px`;
  //   }

  //   /*
  //   * add event listener so that component re-render when user
  //   resize the window to have to the box height same as its width.
  //   */
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const [{ isDragging }, drag] = useDrag({
    type: "Image",
    item: { index },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  const [, drop] = useDrop({
    accept: "Image",
    drop: (droppedItem, monitor) => {
      console.log(droppedItem.index);
      if (monitor.didDrop) {
        reorderItems(droppedItem.index, index);
        droppedItem.index = index;
      }
    },
  });

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={(node) => drag(drop(node))}
      className={`box ${
        index === 0 ? "large-img-box " : "bg-slate-300 w-full "
      } ${isDragging && "opacity-20"}`}
    >
      <img draggable index={index} src={item.url} alt="" />
    </div>
  );
};

export default React.memo(ImgBox);

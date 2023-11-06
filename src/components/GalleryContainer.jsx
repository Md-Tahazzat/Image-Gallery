import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ImgBox from "./ImgBox";

const imageObjects = [
  { id: "image-11", url: "https://i.ibb.co/HN1L1rq/image-11.png" },
  { id: "image-3", url: "https://i.ibb.co/3hTrL85/image-3.png" },
  { id: "image-2", url: "https://i.ibb.co/MZ4nkdT/image-2.png" },
  { id: "image-7", url: "https://i.ibb.co/5nYjK2g/image-7.png" },
  { id: "image-5", url: "https://i.ibb.co/9sRTFCC/image-5.png" },
  { id: "image-9", url: "https://i.ibb.co/hmq4Wvx/image-9.png" },
  { id: "image-10", url: "https://i.ibb.co/nRQG7DM/image-10.png" },
  { id: "image-4", url: "https://i.ibb.co/YkVXMLH/image-4.png" },
  { id: "image-8", url: "https://i.ibb.co/2NFXx1C/image-8.png" },
  { id: "image-1", url: "https://i.ibb.co/vZGn1V6/image-1.png" },
  { id: "image-6", url: "https://i.ibb.co/hZ2DxNV/image-6.png" },
];

const GalleryContainer = () => {
  const [items, setItems] = useState(imageObjects);
  const [draggedItem, setDraggedItem] = useState(null);

  // reorder items to change their position
  const reorderItems = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  // handle touch functionality for mobile and tablet
  const handleTouchStart = (e) => {
    const activeIndex = parseInt(e.target.getAttribute("index"));
    setDraggedItem(activeIndex);
  };

  const handleTouchMove = (e, index) => {
    // console.log("touch moved");
    // if (draggedItem !== null) {
    //   // Implement logic for reordering images during touch move
    //   // You may need to calculate touch coordinates and update image positions accordingly.
    // }
  };

  const handleTouchEnd = (e, index) => {
    console.log(e.target);
    // if (draggedItem !== null) {
    //   moveImage(draggedItem, index);
    //   setDraggedItem(null);
    // }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4 md:p-6 lg:p-10 grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4 lg:grid-cols-5">
        {items.map((item, index) => (
          <ImgBox
            reorderItems={reorderItems}
            key={item.id}
            item={item}
            index={index}
            handleTouchStart={handleTouchStart}
            handleTouchMove={handleTouchMove}
            handleTouchEnd={handleTouchEnd}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default GalleryContainer;

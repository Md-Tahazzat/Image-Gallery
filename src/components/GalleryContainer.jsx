import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AddImgBox from "./AddImgBox";
import { getGalleryContext } from "./ContextProvider";
import ImgBox from "./ImgBox";

const GalleryContainer = () => {
  const { imageItems, setImageItems } = getGalleryContext();

  // reorder items to change their position
  const reorderItems = (fromIndex, toIndex) => {
    const updatedItems = [...imageItems];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setImageItems(updatedItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4 md:p-6 lg:p-10 grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4 lg:grid-cols-5">
        {imageItems.map((item, index) => (
          <ImgBox
            reorderItems={reorderItems}
            key={item.id}
            item={item}
            index={index}
          />
        ))}
        <AddImgBox />
      </div>
    </DndProvider>
  );
};

export default GalleryContainer;

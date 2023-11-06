import React from "react";
import { getGalleryContext } from "./ContextProvider";

const GalleryHeader = () => {
  const { selectedItems, setSelectedItems, imageItems, setImageItems } =
    getGalleryContext();

  const handleDelete = () => {
    let remainingImageObjects = [...imageItems];
    selectedItems.forEach((selectedId) => {
      remainingImageObjects = remainingImageObjects.filter(
        (item) => item.id !== selectedId
      );
      console.log(remainingImageObjects);
    });
    setSelectedItems([]);
    setImageItems(remainingImageObjects);
  };
  return (
    <div className="w-full flex px-4 md:px-6 lg:px-10 md:text-lg lg:text-xl font-semibold items-center justify-between h-[8vh] border-b-2 border-slate-300">
      {/* TODO: have make the delete button functional $ selected files dynamic */}
      <div>
        {selectedItems?.length > 0 ? (
          <p>
            {selectedItems.length} {selectedItems.length > 1 ? "Files" : "File"}{" "}
            Selected
          </p>
        ) : (
          <h1>Gallery</h1>
        )}
      </div>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700 duration-150"
      >
        Delete files
      </button>
    </div>
  );
};

export default GalleryHeader;

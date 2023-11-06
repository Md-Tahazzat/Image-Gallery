import React, { createContext, useContext, useState } from "react";

const GALLERY_CONTEXT = createContext(null);

const imageObjects = [
  { id: "image-1", url: "https://i.ibb.co/HN1L1rq/image-11.png" },
  { id: "image-2", url: "https://i.ibb.co/3hTrL85/image-3.png" },
  { id: "image-3", url: "https://i.ibb.co/MZ4nkdT/image-2.png" },
  { id: "image-4", url: "https://i.ibb.co/5nYjK2g/image-7.png" },
  { id: "image-5", url: "https://i.ibb.co/9sRTFCC/image-5.png" },
  { id: "image-6", url: "https://i.ibb.co/hmq4Wvx/image-9.png" },
  { id: "image-7", url: "https://i.ibb.co/nRQG7DM/image-10.png" },
  { id: "image-8", url: "https://i.ibb.co/YkVXMLH/image-4.png" },
  { id: "image-9", url: "https://i.ibb.co/2NFXx1C/image-8.png" },
  { id: "image-10", url: "https://i.ibb.co/vZGn1V6/image-1.png" },
  { id: "image-11", url: "https://i.ibb.co/hZ2DxNV/image-6.png" },
];

const ContextProvider = ({ children }) => {
  const [imageItems, setImageItems] = useState(imageObjects);
  const [selectedItems, setSelectedItems] = useState([]);
  const contextValue = {
    selectedItems,
    setSelectedItems,
    imageItems,
    setImageItems,
  };
  return (
    <GALLERY_CONTEXT.Provider value={contextValue}>
      {children}
    </GALLERY_CONTEXT.Provider>
  );
};

export default ContextProvider;

// import getGalleryContext to get the galleryContext value.
export const getGalleryContext = () => useContext(GALLERY_CONTEXT);

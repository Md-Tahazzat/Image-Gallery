import React from "react";
import AddImgBox from "./AddImgBox";
import ImgBox from "./ImgBox";

const GalleryContainer = () => {
  // TODO: have to add the dynamic images in the array.
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    // <div ref={galleryContainerRef} className="flex flex-wrap m-2 md:m-3 lg:m-5">
    <div className="p-4 md:p-6 lg:p-10 grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4 lg:grid-cols-5">
      {images.map((img) => (
        <ImgBox key={img} ind={img} />
      ))}
      <AddImgBox />
    </div>
  );
};

export default GalleryContainer;

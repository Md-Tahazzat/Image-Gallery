import React from "react";
import Container from "./Container";
import GalleryContainer from "./GalleryContainer";
import GalleryHeader from "./GalleryHeader";

const Gallery = () => {
  return (
    <div className="w-full bg-blue-100">
      <Container componentStyle="max-w-[80rem] min-h-screen mx-4 md:mx-6 lg:mx-auto bg-slate-50 border-2 border-slate-200">
        <GalleryHeader />
        <GalleryContainer />
      </Container>
    </div>
  );
};

export default Gallery;

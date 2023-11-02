import React from "react";
import Container from "./Container";
import GalleryContainer from "./GalleryContainer";
import GalleryHeader from "./GalleryHeader";

const Gallery = () => {
  return (
    <div className="w-full md:py-2 bg-blue-100">
      {/* TODO: have to minimize the Container height according to the content */}
      <Container componentStyle="max-w-[80rem] md:rounded-lg min-h-[calc(100vh-16px)] mx-2 md:mx-4 lg:mx-auto bg-slate-50 border-2 border-slate-300">
        <GalleryHeader />
        <GalleryContainer />
      </Container>
    </div>
  );
};

export default Gallery;

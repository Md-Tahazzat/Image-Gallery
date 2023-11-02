import React from "react";

const GalleryHeader = () => {
  return (
    <div className="w-full flex px-4 md:px-6 lg:px-10 md:text-lg lg:text-xl font-semibold items-center justify-between h-[8vh] border-b-2 border-slate-300">
      {/* TODO: have make the delete button functional $ selected files dynamic */}
      <div>3 Files Selected</div>
      <button className="text-red-600">Delete files</button>
    </div>
  );
};

export default GalleryHeader;
